import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../utils/Colors';
import Images from '../assets/Images';
import Constants from '../utils/Constants';
import Home from '../screens/Home/Home';
import Search from '../screens/Search/Search';
import Upload from '../screens/Upload/Upload';
import Setting from '../screens/Setting/Setting';
import Notification from '../screens/Notification/Notification';

const Tab = createBottomTabNavigator();

const BottomNaviagtion = () => {
  return (
    <Tab.Navigator
      initialRouteName={Constants.Home}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.red,
        tabBarInactiveTintColor: Colors.gray,
        tabBarShowLabel: false,
        showLabel: false,
        tabBarStyle: {
          borderRadius: 50,
          position: 'absolute',
          bottom: 10,
          marginHorizontal: 16,
        },
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={Images.icHome}
                style={{
                  height: 21,
                  width: 24,
                  tintColor: focused
                    ? `${Colors.lightRed}`
                    : `${Colors.lightYellow}`,
                }}
              />
            );
          }, 
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={Images.icSearch}
                style={{
                  height: 21,
                  width: 24,
                  tintColor: focused
                    ? `${Colors.lightRed}`
                    : `${Colors.lightYellow}`,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={'Upload'}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={Images.icProfile}
                style={{
                  height: 70,
                  width: 34,
                  tintColor: focused
                    ? `${Colors.lightRed}`
                    : `${Colors.lightYellow}`,
                }}
              />
            );
          },
        }}
        component={Upload}
      />

      <Tab.Screen
        name={'Notications'}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={Images.icNotifiction}
                style={{
                  height: 21,
                  width: 24,
                  tintColor: focused
                    ? `${Colors.lightRed}`
                    : `${Colors.lightYellow}`,
                }}
              />
            );
          },
        }}
        component={Notification}
      />
      <Tab.Screen
        name={'Setting'}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={Images.isSettings}
                style={{
                  height: 21,
                  width: 24,
                  tintColor: focused
                    ? `${Colors.lightRed}`
                    : `${Colors.lightYellow}`,
                }}
              />
            );
          },
        }}
        component={Setting}
      />
    </Tab.Navigator>
  );
};

export default BottomNaviagtion;

const styles = StyleSheet.create({});
