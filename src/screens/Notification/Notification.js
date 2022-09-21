import {View, Text,StyleSheet} from 'react-native';
import React, { useContext } from 'react';
import Header from '../../components/Header';
import ColorTheme from '../../utils/ColorTheme';
import { ThemeContext } from '../../utils/ThemeManger';
import Colors from '../../utils/Colors';

const Notification = () => {
  const {theme}=useContext(ThemeContext)
  return (
    <ColorTheme>
      <View>
        <Header title={'Notification'} />
        <Text style={[styles.text, styles[`text${theme}`]]}>
        Notification
        </Text>
      </View>
    </ColorTheme>
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
