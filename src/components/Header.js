import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Images from '../assets/Images';

const Header = props => {
  return (
    <View
      style={{
        alignItems: 'center',
        height: heightPercentageToDP(7),
        backgroundColor: 'white',
        flexDirection: 'row',
      }}>
      {props.back && (
        <TouchableOpacity
          style={{
            zIndex: 1,
            left: 10,
            height: 30,
            width: 30,
            position: 'absolute',
          }}
          onPress={() => props.onClickback()}>
          <Image
            source={Images.icBack}
            style={{
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
      )}
      <Text
        numberOfLines={2}
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginHorizontal: widthPercentageToDP(30),
        }}>
        {props.title}
      </Text>
      {props.right && (
        <TouchableOpacity
          style={{
            zIndex: 1,
            right: 10,
            position: 'absolute',
          }}
          onPress={() => alert('RightClick')}>
          <Image
            source={Images.icHome}
            style={{
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
