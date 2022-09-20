import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ManuStack from '../components/MainStack/ManuStack';

const Stack = createNativeStackNavigator();
const NAVRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >{ManuStack(Stack)}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default NAVRoutes;

const styles = StyleSheet.create({});
