import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'

const Language = ({navigation}) => {
  return (
    <View>
        <Header back onClickback={()=>navigation.goBack()} title={'Language'} />

      <Text>Language</Text>
    </View>
  )
}

export default Language

const styles = StyleSheet.create({})