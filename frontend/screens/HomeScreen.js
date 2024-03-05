import { StatusBar } from 'expo-status-bar';

import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Text, SafeAreaView, Image, ScrollView, Dimensions } from 'react-native';
// import { AuthContext } from '../store/auth-context';
import * as styles from '../styles';
import SearchPressable from '../components/HeaderButton/SearchButton';
import NotificationPressable from '../components/HeaderButton/NotificationButton';
import MorePressable from '../components/HeaderButton/MoreButton';

import ShirtCategory from '../components/Categories/ShirtCategory';
import TshirtCategory from '../components/Categories/TshirtCategory';
import JacketCategory from '../components/Categories/JacketCategory';
import BlouseCategory from '../components/Categories/BlouseCategory';
import DressCategory from '../components/Categories/DressCategory';
import ShortsCategory from '../components/Categories/ShortsCategory';
import PantsCategory from '../components/Categories/PantsCategory';
import SkirtCategory from '../components/Categories/SkirtCategory';
import SweaterCategory from '../components/Categories/SweaterCategory';
import JeansCategory from '../components/Categories/JeansCategory';

import FilterAcquisition from '../components/Acquisition/FilterAcquisition';
import DistanceAcquisition from '../components/Acquisition/DistanceAcquisition';
import FreeAcquisition from '../components/Acquisition/FreeAcquisition';
import BuyAcquisition from '../components/Acquisition/BuyAcquisition';
import BorrowAcquisition from '../components/Acquisition/BorrowAcquisition';
import RentAcquisition from '../components/Acquisition/RentAcquisition';

import Footer from '../components/footer/Footer.js';

function HomeScreen() {
  const [fetchedMessage, setFetchedMesssage] = useState('');

  // const authCtx = useContext(AuthContext);
  // const token = authCtx.token;

  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://react-native-course-3cceb-default-rtdb.firebaseio.com/message.json?auth=' +
  //       token
  //     )
  //     .then((response) => {
  //       setFetchedMesssage(response.data);
  //     });
  // }, [token]);

  // Lấy kích thước màn hình
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SafeAreaView>
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 248, height: 47, position: 'absolute', top: 50 }}
        />

        <SearchPressable />
        <NotificationPressable />
        <MorePressable />
      </SafeAreaView>

      <SafeAreaView style={styles.categoriesStyles.view}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <ShirtCategory />
          <TshirtCategory />
          <JacketCategory />
          <BlouseCategory />
          <DressCategory />
          <ShortsCategory />
          <PantsCategory />
          <SkirtCategory />
          <SweaterCategory />
          <JeansCategory />
        </ScrollView>
      </SafeAreaView>

      <SafeAreaView style={styles.acquisitionStyles.view}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <FilterAcquisition />
          <DistanceAcquisition />
          <FreeAcquisition />
          <BuyAcquisition />
          <BorrowAcquisition />
          <RentAcquisition />
        </ScrollView>
      </SafeAreaView>

      <SafeAreaView style={{ position: 'absolute', bottom: -15 }}>
        <Footer />
      </SafeAreaView>
    </SafeAreaView>
  );
}
export default HomeScreen;