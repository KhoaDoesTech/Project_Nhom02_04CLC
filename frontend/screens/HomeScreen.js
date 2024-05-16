import { StatusBar } from "expo-status-bar";

import React, { useEffect, useState, useContext, useCallback } from "react";
import {
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  View,
  StyleSheet,
  RefreshControl,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import CategoryItem from "../components/CategoryItem/index.js";
import HeaderButton from "../components/HeaderButton/index.js";
import Footer from "../components/footer/Footer.js";
import { AllProductItem, GivingItem, LendingItem, RentingItem, SellingItem } from "../components/TransactionItem"

export default function HomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  function openDrawerHandler() {
    navigation.openDrawer('HomeMenu')
  }

  function openAddDrawerHanler() {
    navigation.openDrawer('AddDrawer');
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "20%", zIndex: 9999, backgroundColor: '#fff' }}>
        <SafeAreaView style={styles.header}>
          <Image
            source={require("../assets/images/logo.png")}
          />

          <View style={styles.headerAction}>
            <HeaderButton
              icon={<Feather name="search" size={30} color="black" />}
              onPress={() => navigation.navigate('Search')}
            />
            <HeaderButton
              icon={<Ionicons name="notifications" size={30} color="black" />}
            />
            <HeaderButton
              icon={<Ionicons name="reorder-three" size={30} color="black" />}
              onPress={openDrawerHandler}
            />
          </View>
        </SafeAreaView>
        <SafeAreaView>
          <SafeAreaView style={styles.categoriesStyles}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <CategoryItem children="Shirt" />
              <CategoryItem children="Tshirt" />
              <CategoryItem children="Jacket" />
              <CategoryItem children="Blouse" />
              <CategoryItem children="Dress" />
              <CategoryItem children="Shorts" />
              <CategoryItem children="Pants" />
              <CategoryItem children="Skirt" />
              <CategoryItem children="Sweater" />
              <CategoryItem children="Jeans" />
            </ScrollView>
          </SafeAreaView>
        </SafeAreaView>
      </View>

      <View
        style={styles.listItem}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {/* <GivingItem />
        <SellingItem />
        <RentingItem />
        <LendingItem /> */}
        <AllProductItem />
      </View>

      <SafeAreaView style={{ position: "absolute", bottom: '-2%' }}>
        <Footer />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
    overflow: "hiden",
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: '20%'
  },
  categoriesStyles: {
    marginBottom: '5%',
    marginLeft: 10,
    marginRight: 10,
    justify: "center",
    flexDirection: "row",
  },
  header: {
    flex: 4,
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10
  },
});
