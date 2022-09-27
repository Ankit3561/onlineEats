import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import Header from '../../components/Header';
import ColorTheme from '../../utils/ColorTheme';
import {ThemeContext} from '../../utils/ThemeManger';
import Colors from '../../utils/Colors';
import { MyGlobaldata } from '../../navigation/AppRoutes';

const Notification = () => {
  const value = useContext(MyGlobaldata);
  return (
   
      <View>
        <Header title={value.profession} />
        <Header title={value.name} />

        {/* <Text style={[styles.text, styles[`text${theme}`]]}>Notification</Text> */}
      </View>

  );
};

export default Notification;
const styles = StyleSheet.create({
  text: {
    color: Colors.black,
  },
  textdark: {
    color: Colors.white,
  },
});
