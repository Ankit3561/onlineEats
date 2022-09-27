import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchBars from '../../components/SearchBars';
import Colors from '../../utils/Colors';
import {mainFoodList} from '../../utils/DataList';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Search = ({navigation}) => {
  const [focus, setFocus] = useState(true);
  const [mainArray, setMainArray] = useState(mainFoodList);
  const [filterArray, setFilterArray] = useState([]);
  const [recentArray, setRecentArray] = useState([]);

  const [value, setValue] = useState('');

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      apiCall();
      _clearAll();
      getRecentHistory();
      setFilterArray([]);
      setValue('');
    });

    return unsubscribe;
  }, [navigation]);
  const apiCall = () => {
     

      fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => {
      console.log("KKK ",json)
    })
    .catch((error) => {
      console.log('ddds',JSON.stringify(error.response));
    });
  };
  const searchFunction = text => {
    if (text.length > 0) {
      setValue(text);
      let data = [];
      mainArray.map((item, index) => {
        if (item.name.toLowerCase().includes(text.toLowerCase())) {
          data.push(item);
        }
      });
      setFilterArray([...data]);
    } else {
      setFilterArray([]);
      setValue(text);
    }
  };
  const storeRecentHistory = async namee => {
    try {
      let data = recentArray;

      if (data.length > 0) {
        for (let i = 0; i < recentArray.length; i++) {
          if (recentArray[i].toLowerCase() === namee.toLowerCase()) {
            data.splice(i, 1);
          }
        }
        data.push(namee);
      } else {
        data.push(namee);
      }
      setRecentArray([...data]);
      await AsyncStorage.setItem('recentHistory', JSON.stringify(data));
    } catch (error) {
      // Error saving data
    }
  };
  const getRecentHistory = async () => {
    try {
      const myArray = await AsyncStorage.getItem('recentHistory');
      if (myArray !== null) {
        let arr = JSON.parse(myArray);
        setRecentArray([...arr]);
      }
      myArray.reverse()
    } catch (error) {
      // Error retrieving data
    }
  };
  const _clearAll = async () => {
    try {
      await AsyncStorage.clear();
      console.log('Done');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 10}}>
      <SearchBars value={value} onChangeText={text => searchFunction(text)} />
      <ScrollView style={{marginBottom: 70}}>
        {value.length > 0
          ? filterArray.map((item, index) => {
              return (
                <Text
                  onPress={() => {
                    storeRecentHistory(item.name);
                    navigation.navigate('ItemDetailScreen', {
                      itemDetails: item,
                    });
                  }}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: 'grey',
                    marginVertical: 5,
                    paddingVertical: 5,
                    paddingHorizontal: 5,
                    fontSize: 18,
                    fontWeight: '700',
                  }}>
                  {item.name}
                </Text>
              );
            })
          : recentArray.map(item => {
              return (
                <Text
                  onPress={() =>
                    navigation.navigate('ItemDetailScreen', {itemDetails: item})
                  }
                  style={{
                    borderBottomWidth: 1,
                    borderColor: 'grey',
                    marginVertical: 5,
                    paddingVertical: 5,
                    paddingHorizontal: 5,
                    fontSize: 18,
                    fontWeight: '700',
                  }}>
                  {item}
                </Text>
              );
            })}
      </ScrollView>
    </View>
  );
};

export default Search;
