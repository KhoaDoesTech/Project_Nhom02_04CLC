import React from 'react';
import ProductCart from '../components/Item/ProductCart.js';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import FooterPurchase from '../components/footer/FooterPurchase.js';

export default function CartScreen() {
  return (
    <View style={{}}>
      <ScrollView style={styles.list}>
        <ProductCart />
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
      </ScrollView>
      
      <SafeAreaView style={{ position: "absolute", bottom: 0 }}>
        <FooterPurchase />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    marginBottom: 70,
    marginHorizontal: 24,
    height: "85%",
    overflow: "hidden",
  },
});
