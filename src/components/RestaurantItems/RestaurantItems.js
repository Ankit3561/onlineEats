import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import navigationString from '../../constant/navigationString';
import 'react-native-gesture-handler';
export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://assets1.cbsnewsstatic.com/hub/i/2015/07/01/0b059f60-344d-4ada-baae-e683aff3650a/istock000044051102large.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://media.istockphoto.com/photos/couple-eating-lunch-with-fresh-salad-and-appetizers-picture-id944478708?k=20&m=944478708&s=612x612&w=0&h=Pi_S842DKFcyI0IWy6oLMdr29a3BPcardvbvVQqahZU=',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
];

export default function RestaurantItems({navigation,...props}) {
  const list = item => {
    // alert('good');
    navigation.navigate(navigationString?.RestaurantDetail);
  };
  const [activeTab, setActiveTab] = useState('');
  return (
    <>
      {props?.restaurentData.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RestaurantDetail');
            }}
            title="Detail"
            // onPress={list} onPress={() => navigation.navigate( navigationString.RestaurantDetail)}>
            // onPress={(item)=>navigation.navigate(navigationString.RestaurantDetail,{...item})}
            activeOpacity={1}
            style={{marginBottom: 30}}>
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
        backgroundColor: '#eee',
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
const styles = StyleSheet.create({});
