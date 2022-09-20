import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Btabs from '../src/Tabs/Btabs';
import RoutesNAme from '../src/Routes/RoutesNmae';
import navigationString from '../src/constant/navigationString';
//SoftDrisk
const Stack = createNativeStackNavigator();
const NavigatersAllBotamtotop = () => {
  return (
    <Stack.Navigator  >
      <Stack.Screen options={{headerShown: false}} name={navigationString.RoutesNAme} component={RoutesNAme} />
      <Stack.Screen options={{headerShown: false}} name={'Btabs'} component={Btabs} />
    </Stack.Navigator>
  );
};

export default NavigatersAllBotamtotop;

const styles = StyleSheet.create({});
