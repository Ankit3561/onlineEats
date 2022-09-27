import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';

import FoodList from './FoodList';
import Categories from './Categories';
import Colors from '../../utils/Colors';
import SearchBars from '../../components/SearchBars';
import Header from '../../components/Header';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import MessagePopup from '../../components/MessagePopup';
import MessageListPopup from '../../components/MessageListPopup';
import {MyGlobaldata} from '../../navigation/AppRoutes';
import {useSelector,useDispatch} from 'react-redux';

const Home = ({navigation}) => {
  const [active, setActive] = useState(false);
  const [dishes, setDishes] = useState([]);
  const value = useContext(MyGlobaldata);
  const statess = useSelector(state => state.showname);
  const statesss = useSelector(state => state.shownames);

const showNum=()=>{
  return{
    type:"Arun"
  }
}
const dispatch=useDispatch()
  return (
    <SafeAreaView style={{backgroundColor: Colors.white}}>
      <View style={{backgroundColor: 'white', padding: 11}}>
        <TouchableOpacity
          onPress={() => {
            value.setprofession('developer'), value.setname('Arun'),dispatch(showNum());
          }}>
          <Header title={value.profession} />
          <Header title={value.name} />
          <Header title={statess} />
          <Header title={statesss} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 40,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setActive(true), setDishes(['Dosa', 'Upma', 'Pav Bhaji']);
            }}>
            <Text style={{color: '#000', fontSize: 20}}>India</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActive(true), setDishes(['Hakka Noodle', 'Kekda', 'Samp']);
            }}>
            <Text style={{color: '#000', fontSize: 20}}>China</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActive(true), setDishes(['Crabs', 'Admi']);
            }}>
            <Text style={{color: '#000', fontSize: 20}}>Koria</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: heightPercentageToDP(10)}}>
          <SearchBars />
          <TouchableOpacity
            onPress={() => navigation.navigate('Search')}
            style={{
              backgroundColor: 'transparent',
              height: '100%',
              position: 'absolute',
              zIndex: 1,
              width: '100%',
            }}></TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{marginBottom: 150}}
        showsVerticalScrollIndicator={false}>
        <Categories navigation={navigation} />
        <FoodList navigation={navigation} />
      </ScrollView>
      {/* <MessagePopup message={"This is the easy to make in yor project "}  active={active} /> */}
      <MessageListPopup
        message={'This is the easy to make in yor project '}
        active={active}
        setActive={setActive}
        dishes={dishes}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
