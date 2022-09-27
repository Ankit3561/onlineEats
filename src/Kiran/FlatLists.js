import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {mainFoodList} from '../utils/DataList';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'Thisard Item',
  },
  {
    id: '5',
    title: 'Thiasrd Item',
  },
  {
    id: '6',
    title: 'Thiasrd Item',
  },
  {
    id: '57694a0f-3da1-471f-bd96-1455756e29d72',
    title: 'seven Item',
  },
  {
    id: '88694a0f-3da1-471f-bd96-1455756e29d72',
    title: 'eight Item',
  },
  {
    id: '98694a0f-3da1-471f-bd96-1455756e29d72',
    title: 'nine Item',
  },
  {
    id: '18694a0f-3da1-471f-bd96-1455756e29d72',
    title: 'ten Item',
  },
];

const Item = ({title}) => (
  <View style={{}}>
    <Text
      style={{height: 200, width: 150, backgroundColor: 'gold', margin: 10}}>
      {title}
    </Text>
  </View>
);
const FlatLists = () => {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
    />
  );
  return (
    <ScrollView>
      <View style={{height: 300, backgroundColor: 'cyan'}} />

      <FlatList
        data={DATA.slice (0,7)}
        horizontal
        renderItem={renderItem}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={2}
      />

      <View style={{height: 300, backgroundColor: 'cyan'}} />
    </ScrollView>
  );
};

export default FlatLists;

const styles = StyleSheet.create({});
