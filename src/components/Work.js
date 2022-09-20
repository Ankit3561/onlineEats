import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Work = ({navigation}) => {
  return (
<View style={{backgroundColor:"red"}}>
    <Text>Books for Works</Text>
    <Button onPress={()=>navigation.navigate('Home')} title='go Go BAck'/>
</View>
  )
}

export default Work
