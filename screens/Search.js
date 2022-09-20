import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBars from '../src/components/SearchBar/SearchBars'

const Search = ( goToSearch) => {
  return (
    <View style={{flex:1,backgroundColor:"white" ,padding:15}}>
<SearchBars   goToSearch={goToSearch}/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})