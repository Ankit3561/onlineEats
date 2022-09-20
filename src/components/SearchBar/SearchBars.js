import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../ColorConst/Colors';
  
  const SearchBars = ({navigation, goToSearch, ...props}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search')
          }}>
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.white,
              borderRadius: 30,
            }}>
            <Ionicons style={{padding: 10}} name="location-sharp" size={24} />
            <TextInput
            //   autoFocus={props?.focus}
              style={[styles.input, styles.textInputContainer]}
            //   onChangeText={text => {
            //     props.setSearchText(text);
            //   }}
            //   value={props.searchText}
              placeholder="search data"
              keyboardType="text"
            />
            <Icon
              name="search"
              size={14}
              style={{marginRight: 8, color: `${Colors.red}`}}
            />
          </View>
        </TouchableOpacity>
      </>
    );
  };
  
  export default SearchBars;
  
  const styles = StyleSheet.create({
    input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: Colors.white,
      color: Colors.lightBlack,
    },
    textInputContainer: {
      backgroundColor: Colors.white,
      borderRadius: 50,
      alignItems: 'center',
      flexDirection: 'row',
      marginRight: 10,
    },
  });
  