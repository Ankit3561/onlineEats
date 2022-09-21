import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNaviagtion from './BottomNaviagtion';
import ItemDetailScreen from '../screens/ItemDetailScreen/ItemDetailScreen';
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
import ChangeThemes from '../screens/ThemeChange/ChangeThemes';



const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
  
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'BottomNaviagtion'}>
          <Stack.Screen
            name={'BottomNaviagtion'}
            component={BottomNaviagtion}
          />
          <Stack.Screen
            name={'ItemDetailScreen'}
            component={ItemDetailScreen}
          />
          <Stack.Screen name={'CategoryScreen'} component={CategoryScreen} />
          <Stack.Screen name={'ChangeTheme'} component={ChangeThemes}/>
          {/* <Stack.Screen name={'ChangeTheme'} component={ChangeThemes} /> */}
        </Stack.Navigator>
      </NavigationContainer>
 
  );
};

export default Routes;

const styles = StyleSheet.create({});
