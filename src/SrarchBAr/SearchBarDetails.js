import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import RestaurantItems from '../components/RestaurantItems/RestaurantItems';

const SearchBarDetails = ({navigation,route,goToSearch, ...props}) => {
  const initialData = {};
  const [disable, setDisable] = useState('diable');
  const [searchText, setSearchText] = useState('');
  return (
    <SafeAreaView>
      <View style={{backgroundColor:"white",padding:10}}>

     
        <View >
          <SearchBar
           goToSearch={goToSearch}
          
            autoFocus={true}
            navigation={navigation}
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <Text>{searchText}</Text>
        </View>
        {/* <RestaurantItems
          navigation={navigation}
          restaurentData={route.params.searchArray}
        /> */}
  
      </View>
    </SafeAreaView>
  );
};

export default SearchBarDetails;

const styles = StyleSheet.create({});
