import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import Header from '../../components/Header';
import {TouchableOpacity} from 'react-native';
import Colors from '../../utils/Colors';

const Setting = ({navigation}) => {
  const [settingList, setSettinglist] = useState([
    'Profile',
    'Notifications',
    'Terms & Conditions',
    'Language',
    'Theme Change',
    'Logout',
    
  ]);
  const moveTo = item => {
    if (item === 'Theme Change') {
      navigation.navigate('ChangeTheme');
    }
    if (item === 'Language') {
      navigation.navigate('Language');
    }else{
      alert("comming soon")
    }
  };
  return (
    <View style={{flex: 1}}>
      <Header title={'Setting'} />
      {settingList.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => moveTo(item)}
            style={{
              backgroundColor: 'white',
              borderBottomWidth: 0.5,
              borderColor: 'grey',
              paddingHorizontal: 10,
              marginTop: index === 0 ? 10 : 0,
              margin: 5,
              elevation: 10,
            }}>
            <Text style={{fontSize: 16, color: 'black', paddingVertical: 5}}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
  },
  textdark: {
    color: Colors.white,
  },
});
