import {Animated, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Work from '../components/Work';
import navigationString from '../constant/navigationString';
import Settings from '../components/Settings/Settings';
import ManuStack from '../components/MainStack/ManuStack';
import Btabs from '../Tabs/Btabs';

const Stack = createNativeStackNavigator();
const NaviRoutes = () => {
  return (
 

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={navigationString.Home}>
        {/* <Stack.Screen name={navigationString.Home} component={Home} />
        <Stack.Screen name={navigationString.Settings} component={Settings} />
        <Stack.Screen name={navigationString.Work} component={Work} /> */}
        {ManuStack(Stack)}
        {/* <Btabs/> */}
      </Stack.Navigator>
    </NavigationContainer>
 

  );
};

export default NaviRoutes;

const styles = StyleSheet.create({});
