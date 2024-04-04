import React, { useState } from 'react';
import { SafeAreaView, Pressable, Text, StyleSheet } from 'react-native';
import MessageIcon from '../icons/MessageIcon';
import AddToCartIcon from '../icons/AddToCartIcon';

const ProductFooter = () => {
  const [cart, setCart] = useState(false);

  const addToCart = () => {
    setCart(!cart);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={[styles.rowContainer, {backgroundColor: '#D9D9D9'}]}>
        <SafeAreaView style={styles.item}>
          <Pressable style={styles.iconButton}>
            <MessageIcon color={'#000000'}/>
          </Pressable>
          <Pressable style={styles.iconButton}>
            <AddToCartIcon color={'#000000'}/>
          </Pressable>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={[styles.rowContainer, {backgroundColor: '#38A59F'}]}>
        <Pressable style={styles.item} onPress={addToCart}>
          <Text style={styles.text}>Buy now</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopWidth: 0.1
  },
  rowContainer: {
    width: '50%',
    height: '100%',
  },
  item: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 24,
    fontWeight: '500'
  },
  iconButton: {
    width: '50%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.5
  }
});

export default ProductFooter;