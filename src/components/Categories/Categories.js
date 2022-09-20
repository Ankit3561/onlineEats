import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import items from './Items';
import Colors from '../../ColorConst/Colors';
import navigationString from '../../constant/navigationString';

const Categories = ({navigation}) => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: Colors.white,
        paddingVertical: 10,
        paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{justifyContent: 'center'}}>
          <Text>
            {items.map((item, index) => (
              <TouchableOpacity onPress={() => navigation.navigate(navigationString.SoftDrisk)}>
                <View key={index}>
                  <Image
                    source={item.image}
                    style={{
                      height: 45,
                      width: 55,
                      resizeMode: 'contain',
                      marginLeft: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '900',
                      marginHorizontal: 10,
                    }}>
                    {item.text}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
