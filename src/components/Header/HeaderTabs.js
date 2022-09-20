import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import HeaderBottom from './HeaderBottom';
import Colors from '../../ColorConst/Colors';

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View style={styles.mainContainer}>
      <HeaderBottom
        text="Delivery"
        btnColor={Colors.black}
        textcolor={Colors.white}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderBottom
        text="Pickup"
        btnColor={Colors.white}
        textcolor={Colors.black}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
