import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../utils/Colors';
import { mainFoodList } from '../../utils/DataList';

export default function FoodList({navigation}) {
  const [foolListArray, setFoodlistArray] = useState(mainFoodList);
  return (
    <>
      {foolListArray.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ItemDetailScreen', {itemDetails: item});
            }}
            title="Detail"
            activeOpacity={1}
            style={{marginBottom: 20}}>
            <View
              key={index}
              style={{marginTop: 10, backgroundColor: 'white', padding: 15}}>
              <RenderImage image={item.image_url} />
              <RestaurantInfo name={item.name} rating={item.rating} />
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
}

const RenderImage = props => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{
          height: hp('22%'), // 70% of height device screen
        }}
      />
      <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
        <Icon name="heart-o" size={24} color="white" style={{marginRight: 8}} />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}>
    <View>
      <Text style={{fontSize: 15, fontWeight: '900'}}>{props.name}</Text>
      <Text style={{fontSize: 13, color: 'gray'}}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: Colors.white,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      }}>
      <Text style={{fontSize: 13, fontWeight: '800'}}>{props.rating}</Text>
    </View>
  </View>
);
