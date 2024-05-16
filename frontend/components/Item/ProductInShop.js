import React from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Price from "./Price";
import RateIcon from "../icons/RateIcon";

export default function ProductInShop(props) {
  const navigation = useNavigation();

  const itemTextWithoutFontWeight = {
    ...styles.quantityText,
    fontWeight: undefined,
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("ProductDetail", {
          id: props.id,
          image: props.image,
          name: props.name,
          price: props.price,
          attributes: props.attributes,
          description: props.description,
          rating: props.rating,
        })
      }
    >
      <Image style={styles.image} source={{ uri: props.image }} />
      <SafeAreaView style={styles.info}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.nameText}>
          {props.name}
        </Text>
        <SafeAreaView style={styles.rowContainer}>
          <Text style={styles.quantityText}>Quantity: </Text>
          <Text style={itemTextWithoutFontWeight}>{props.quantity}</Text>
        </SafeAreaView>
        <Price Price={props.price} />
      </SafeAreaView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "#D5D5D5",
    padding: 10,
    borderRadius: 20,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  info: {
    alignContent: "center",
    marginVertical: 10,
    marginLeft: 5,
    width: 250,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 15,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "600",
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 5
  }
});
