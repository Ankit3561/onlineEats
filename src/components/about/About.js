import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const RestrunetYplApi = {
  image:
    'https://cdn.dribbble.com/users/4700568/screenshots/16256473/food_street.jpg',
  name: 'Executive Chef',
  price: '$$',
  reviews: '1500',
  rating: '4.4',
  categories: [{title: 'Thali'}, {title: 'Full and Half'}],
};

export default function About() {
  const {name, image, price, reviews, rating, categories} = RestrunetYplApi;
  const formattedCategories = categories.map(cat => cat.title).join(' • ');
  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View
      style={{
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomWidth: 1.0,
        borderBottomColor: 'black',
        marginBottom: 20,
        borderBottomLeftColor: 'green',
      }}>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDiscrp description={description} />
    </View>
  );
}
const RestaurantImage = props => (
  <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />
);
const RestaurantTitle = props => (
  <View>
    <Text
      style={{
        fontSize: 28,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
      }}>
      {props.name}
    </Text>
  </View>
);
const RestaurantDiscrp = props => (
  <Text
    style={{
      marginVertical: 20,
      marginHorizontal: 17,
      fontWeight: '400',
      fontSize: 15.5,
    }}>
    {props.description}
  </Text>
);
const styles = StyleSheet.create({});
