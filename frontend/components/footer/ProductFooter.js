import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import MessageIcon from '../icons/MessageIcon';
import AddToCartIcon from "../icons/AddToCartIcon"

const ProductFooter = (props) => {

  return (
    <View style={styles.container}>
      <View style={[styles.rowContainer, { backgroundColor: '#D9D9D9' }]}>
        <View style={styles.item}>
          <Pressable style={styles.iconButton} onPress={() => { }}>
            <MessageIcon color={'#000000'} />
          </Pressable>
          <Pressable style={styles.iconButton} onPress={props.onPress}>
            <AddToCartIcon color={'#000000'} />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rowContainer, { backgroundColor: '#38A59F' }]}>
        <Pressable style={styles.item} >
          <Text style={styles.text}>Buy now</Text>
        </Pressable>
      </View>
    </View>
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