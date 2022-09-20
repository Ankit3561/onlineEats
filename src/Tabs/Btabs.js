import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../../screens/Home';
import Settings from '../components/Settings/Settings';
import Work from '../components/Work';
import navigationString from '../constant/navigationString';
import ImagesPAth from '../Constants/ImagesPAth';
import Colors from '../ColorConst/Colors';
import SearchBar from '../components/SearchBar';
import SearchBarDetails from '../SrarchBAr/SearchBarDetails';
import SettingsAll from '../../screens/SettingsAll';
import Order from '../../screens/Order';
import Profile from '../../screens/Profile';
import About from '../components/about/About';
import Search from '../../screens/Search';

const Tab = createBottomTabNavigator();

const Btabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationString.Home}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: `${Colors.red}`,
        tabBarInactiveTintColor: `${Colors.gray}`,
        tabBarShowLabel: false,
        showLabel: false, 
        
        // tabBarOptions: {
        //   tabBarHideOnKeyboard: true,
        //   showIcon: true,
        //   showLabel: false,
        //   activeTintColor: 'red',
        //   inactiveTintColor: 'gray',
        //   adaptive: true,
        //   safeAreaInset: {
        //     bottom: 'always',
        //   },
        // },
        tabBarStyle: {
          // backgroundColor: 'pink',
          borderRadius: 50,
          position: 'absolute',
          bottom: 10,
          marginHorizontal: 16,
   
        },

        // tabBarOptions: {
        //   keyboardHidesTabBar: true,
        //   showIcon: true,
        //   showLabel: false,
        //   activeTintColor: "red",
        //   inactiveTintColor: "gray",
        //   adaptive: true,
        //   safeAreaInset: {
        //     bottom: "always",
        // tabBarVisible:false,
        //   },
      // }
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={ImagesPAth.icHome}
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
                source={ImagesPAth.icSearch}
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
        name={'Profile'}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={ImagesPAth.icProfile}
                style={{
                  height: 70,
                  width: 34,
                  // height: 90,
                  // position:"absolute",
                  // bottom:0.8,
                  // width: 44,
                  tintColor: focused
                    ? `${Colors.lightRed}`
                    : `${Colors.lightYellow}`,
                }}
              />
            );
          },
        }}
        component={Profile}
      />

      <Tab.Screen
        name={'Settings'}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={ImagesPAth.isSettings}
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
        component={SettingsAll}
      />
      <Tab.Screen
        name={'Orders'}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={ImagesPAth.icOrder}
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
        component={Order}
      />
      
      {/* <Tab.Screen
        name={navigationString.About}      
        component={About}
      /> */}
    </Tab.Navigator>
  );
};

export default Btabs;

const styles = StyleSheet.create({});
