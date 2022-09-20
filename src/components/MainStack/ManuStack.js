import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import navigationString from '../../constant/navigationString'
import Btabs from '../../Tabs/Btabs';
import RoutesNAme from '../../Routes/RoutesNmae';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigatersAllBotamtotop from '../../../Rallnavigater/NavigatersAllBotamtotop';

const Stack = createNativeStackNavigator();
const ManuStack = () => {
  return (
    <>
    <Stack.Screen
    name={navigationString.RoutesNAme}
    component={NavigatersAllBotamtotop}
    />
      {/* <Stack.Screen
    name={navigationString.RestaurantItems}
    component={RoutesNAme}
    /> */}
    </>
  )
}

export default ManuStack

const styles = StyleSheet.create({})