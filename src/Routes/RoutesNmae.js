import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ManuStack from '../components/MainStack/ManuStack';
import Home from '../../screens/Home';
import Work from '../components/Work';
import Settings from '../components/Settings/Settings';
import RestaurantDetail from '../../screens/RestaurantDetail';
import About from '../components/about/About';
import SettingsAll from '../../screens/SettingsAll';
import RestaurantItems from '../components/RestaurantItems/RestaurantItems';
import SoftDrisk from '../components/SoftDrink/SoftDrisk';
import navigationString from '../constant/navigationString';
import Btabs from '../Tabs/Btabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//SoftDrisk
const Stack = createNativeStackNavigator();
const RoutesNAme = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        options={{headerShown: false}}
        component={Btabs}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Settings" component={SettingsAll} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      <Stack.Screen name="About" component={About} />

      <Stack.Screen
        name="RestaurantItems"
        options={{headerShown: false}}
        component={RestaurantItems}
      />
      <Stack.Screen
        name="SoftDrisk"
        options={{headerShown: false}}
        component={SoftDrisk}
      />

      {/* <Stack.Screen name={navigationString.Btabs} component={Btabs} /> */}
    </Stack.Navigator>
  );
};

export default RoutesNAme;

const styles = StyleSheet.create({});
