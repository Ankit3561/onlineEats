import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Orders from '../src/Orders/Orders'

const Order = () => {
  return (
    <View style={{flex:1}}>
      <Text><Orders/></Text>
    </View>
  )
}

export default Order

const styles = StyleSheet.create({})