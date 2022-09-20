import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Settings from '../src/components/Settings/Settings';

const SettingsAll = () => {
  return (
    <View style={{flex:1}}>
      <Text>
        <Settings />
      </Text>
    </View>
  );
};

export default SettingsAll;

const styles = StyleSheet.create({});
