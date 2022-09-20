import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/Header';

const ItemDetailScreen = ({route,navigation}) => {
  const {itemDetails} = route.params;
  console.log(itemDetails);
  return (
    <View style={styles.mainContainer}>
      <Header back onClickback={()=>navigation.goBack()} title={itemDetails.name} />
      <Image
        source={{uri: itemDetails.image_url}}
        style={{height: 180, width: `100%`}}
      />
      <Text style={styles.textName}>{itemDetails.name}</Text>
      <Text style={styles.textStyle}>Price:{itemDetails.price}</Text>
      <Text style={styles.textStyle}>Rating: {itemDetails.rating}</Text>
      <Text style={styles.textStyle}>Reviews {itemDetails.reviews}</Text>
    </View>
  );
};

export default ItemDetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomWidth: 1.0,
    borderBottomColor: 'black',
  },
  textStyle: {
    fontWeight: '500',
    marginHorizontal: 10,
  },
  textName: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: 10,
  },
});
