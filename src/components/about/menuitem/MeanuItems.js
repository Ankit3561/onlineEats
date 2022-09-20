import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import foods from './Food';
import Colors from '../../../ColorConst/Colors';

export default function MeanuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            flex: 1,
            borderBottomWidth: 0.5,
            borderBottomColor: Colors.gray,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          <FoodInfo food={food} />
          <FoodImage food={food} />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = props => {
  return (
    <View style={{width: 200, justifyContent: 'space-evenly'}}>
      <Text style={{fontSize: 19, fontWeight: '600'}}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );
};

const FoodImage = props => {
  return (
    <View>
      <Image
        style={{width: 100, height: 100, borderRadius: 8}}
        source={{uri: props.food.image}}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
