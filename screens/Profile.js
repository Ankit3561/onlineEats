import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileAccount from '../src/Account/ProfileAccount'

const Profile = () => {
  return (
    <View style={{flex:1}}>
      <Text><ProfileAccount/></Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})