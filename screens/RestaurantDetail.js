import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import About from '../src/components/about/About';
import MeanuItems from '../src/components/about/menuitem/MeanuItems';

const RestaurantDetail = () => {
  return (
    <View style={{flex: 1}}>
      <About  />
      <MeanuItems />
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({
  menu:{
    marginTop:10
  }
});
