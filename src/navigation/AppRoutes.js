import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useState} from 'react';
import Routes from './Routes';
import {ThemeProvider} from '../utils/ThemeManger';
export const MyGlobaldata = createContext();
const AppRoutes = () => {
const[name,setname]=useState("name")
const[profession,setprofession]=useState("profession")

  return (
    <MyGlobaldata.Provider value={{name,setname,profession,setprofession}} >
      <Routes />
    </MyGlobaldata.Provider>
  );
};

export default AppRoutes;

const styles = StyleSheet.create({});
