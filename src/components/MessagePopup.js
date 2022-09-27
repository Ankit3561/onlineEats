import { View, Text, Modal,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const MessagePopup = ({active,setActive,message}) => {
  return (
    <Modal
        visible={active}
        transparent={true}
        onRequestClose={() => setActive(false)}>
        <TouchableOpacity
          onPress={() => setActive(false)}
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableWithoutFeedback onPress={() => setActive(true)}>
            <View
              conta
              style={{
                borderRadius: 10,
                elevation: 20,
                height: heightPercentageToDP(25),
                width: widthPercentageToDP(90),
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                padding:20
              }}>
              <Text style={{fontSize: 20,textAlign:"center", fontWeight: 'bold', color: '#000'}}>
               {message}
              </Text>
              <TouchableOpacity  onPress={() => setActive(false)} style={{elevation:20, width:widthPercentageToDP(40),marginTop:20,justifyContent:"center",alignItems:"center",backgroundColor:"grey",height:heightPercentageToDP(5),borderRadius:10}} >
              <Text style={{fontSize: 16,textAlign:"center", fontWeight: 'bold', color: '#fff'}}>Close</Text>
            </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
  )
}

export default MessagePopup





// let age =19;
// let hasVotercard='Yes'
//  if(age>=18 && hasVotercard=='Yes'){
//      alert("u can vote !")
//  } else if(age>=18 && hasVotercard=='no'){
//        alert("create your id card!")
//  }
//  else{
//      alert("not balider")
//  }