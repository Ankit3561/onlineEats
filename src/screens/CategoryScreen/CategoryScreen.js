import {View, Text, Image} from 'react-native';
import React from 'react';
import Header from '../../components/Header';

const CategoryScreen = ({route,navigation}) => {
  const {itemCategory} = route.params;
  console.log(itemCategory);
  return (
    <View style={{}}>
      <Header back onClickback={()=>navigation.goBack()} title={itemCategory.text} />
      <Image style={{height: 180, width: `90%`}} source={itemCategory.image} />
      <Text>{itemCategory.text}</Text>
    </View>
  );
};

export default CategoryScreen;
