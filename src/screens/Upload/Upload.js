import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import Header from '../../components/Header';
import Colors from '../../utils/Colors';
import {ThemeContext} from '../../utils/ThemeManger';
import ColorTheme from '../../utils/ColorTheme';

const Upload = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <ColorTheme>
      <View>
        <Header title={'Upload'} />
        <Text style={[styles.text, styles[`text${theme}`]]}>Profile</Text>
      </View>
    </ColorTheme>
  );
};

export default Upload;
const styles = StyleSheet.create({
  text: {
    color: Colors.black,
  },
  textdark: {
    color: Colors.white,
  },
});
