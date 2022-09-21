import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import Header from '../../components/Header';
import {ThemeContext} from '../../utils/ThemeManger';

const ChangeThemes = ({navigation}) => {
  const {bgColor,textColor} = useContext(ThemeContext);
  const {toggleTheme} = useContext(ThemeContext);

  return (
    <View style={{flex:1, backgroundColor: bgColor}}>
      <Header
        back
        onClickback={() => navigation.goBack()}
        title={'ChangeThemes'}
      />
      <Text onPress={()=>toggleTheme()} style={{color:textColor}}>Change Theme</Text>

      <Text style={{color:textColor}}>Hello world</Text>
    </View>
  );
};

export default ChangeThemes;

const styles = StyleSheet.create({});
