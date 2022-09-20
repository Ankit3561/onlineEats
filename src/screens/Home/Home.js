import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import FoodList from './FoodList';
import Categories from './Categories';
import Colors from '../../utils/Colors';
import SearchBars from '../../components/SearchBars';
import Header from '../../components/Header';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.white}}>
      <View style={{backgroundColor: 'white', padding: 11}}>
        <Header title={'Eats'} />
        <View style={{height: heightPercentageToDP(10)}}>
          <SearchBars />
          <TouchableOpacity
            onPress={() => navigation.navigate('Search')}
            style={{
              backgroundColor: 'transparent',
              height: '100%',
              position: 'absolute',
              zIndex: 1,
              width: '100%',
            }}></TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{marginBottom: 150}}
        showsVerticalScrollIndicator={false}>
        <Categories navigation={navigation} />
        <FoodList navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
