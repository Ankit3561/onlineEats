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

const Search = ({navigation}) => {
  const [focus, setFocus] = useState(true);
  const [mainArray, setMainArray] = useState(mainFoodList);
  const [filterArray, setFilterArray] = useState([]);

  const [value, setValue] = useState('');

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setFilterArray([])
      setValue('')
    });

    return unsubscribe;
  }, [navigation]);
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
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 10}}>
      <SearchBars value={value} onChangeText={text => searchFunction(text)} />
      <ScrollView style={{marginBottom: 70}}>
        {value.length > 0 &&
          filterArray.map((item, index) => {
            return (
              <Text
                onPress={() =>
                  navigation.navigate('ItemDetailScreen', {itemDetails: item})

                }
                style={{
                  borderBottomWidth: 1,
                  borderColor:"grey",
                  marginVertical: 5,
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                  fontSize:18,
                  fontWeight:"700"
                }}>
                {item.name}
              </Text>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Search;
