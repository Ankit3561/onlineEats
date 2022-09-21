import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import Colors from './Colors';
import {ThemeContext} from './ThemeManger';

export default ({children, style}) => {
  const {theme} = useContext(ThemeContext);
  return (
    
    <View style={[styles.container, styles[`container${theme}`],style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerdark: {
    backgroundColor: Colors.lightBlack,
  },
  containerlight: {
    backgroundColor: Colors.white,
  },
});
