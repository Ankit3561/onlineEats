import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderTabs from '../src/components/Header/HeaderTabs';
import SearchBar from '../src/components/SearchBar';
import Categories from '../src/components/Categories/Categories';

import RestaurantItems, {
  localRestaurants,
} from '../src/components/RestaurantItems/RestaurantItems';
import {Button} from 'react-native';
import navigationString from '../src/constant/navigationString';
import Colors from '../src/ColorConst/Colors';
import Btabs from '../src/Tabs/Btabs';
import SearchBarss from '../src/components/SearchBar';
import SearchBarDetails from '../src/SrarchBAr/SearchBarDetails';
import SearchBars from '../src/components/SearchBar/SearchBars';
const YELP_API_KEY =
  'bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx';

const Home = ({navigation,goToSearch, route}) => {
  const [restaurentData, setRestaurentData] = useState(localRestaurants);

  return (
    <SafeAreaView style={{backgroundColor: `${Colors.white}`}}>
      <View style={{backgroundColor: 'white', padding: 11}}>
        <HeaderTabs />

     <SearchBars navigation={navigation}/>
      </View>

      <ScrollView
        style={{marginBottom: 150}}
        showsVerticalScrollIndicator={false}>
        <Categories navigation={navigation} />
        <RestaurantItems
          navigation={navigation}
          restaurentData={restaurentData}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
