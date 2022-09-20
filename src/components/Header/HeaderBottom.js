import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../../ColorConst/Colors';

const HeaderBottom = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.touch,
          {backgroundColor: props.activeTab === props.text ? `${Colors.black}` : `${Colors.white}`},
        ]}
        onPress={() => props.setActiveTab(props.text)}>
        <Text
          style={[
            styles.tabs,
            {color: props.activeTab === props.text ? `${Colors.white}` :  `${Colors.black}`},
          ]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBottom;

const styles = StyleSheet.create({
  touch: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  tabs: {
    fontSize: 15,
    fontWeight: '900',
  },
});
