import {View, Text, Image} from 'react-native';
import React from 'react';
import Header from '../../components/Header';

const Setting = () => {
  return (
    <View style={{flex: 1}}>
      <Header  title={'Setting'} />
      <Text>Themes</Text>
    </View>
  );
};

export default Setting;
