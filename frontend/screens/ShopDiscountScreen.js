import React, { useContext, useEffect, useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import { getProductByShopId } from "../API/Product";
import { AuthContext } from "../store/auth-context";
import { useNavigation } from "@react-navigation/native";
import LeftArrowIcon from "../components/icons/LeftArrowIcon";
import AddIcon from "../components/icons/AddIcon";

export default function ShopDiscountScreen() {
  const authCtx = useContext(AuthContext);
  const info = authCtx.userInfo;
  const navigation = useNavigation();
  const [productList, setProductList] = useState([]);
  const [buttonOpacity, setButtonOpacity] = useState(1);

  const handlePressIn = () => {
    setButtonOpacity(0.5);
  };

  const handlePressOut = () => {
    setButtonOpacity(1);
  };

  const handleAddDiscount = () => {}

  useEffect(() => {
    async function fetchShopProduct() {
      try {
        const products = await getProductByShopId(info.userId);
        setProductList(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchShopProduct();
  }, [info.userId]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable
        style={{ marginTop: 50, marginLeft: 20, opacity: buttonOpacity }}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => navigation.navigate("Inventory")}
      >
        <LeftArrowIcon />
      </Pressable>

      {productList.length > 0 ? (
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>No Discount</Text>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>No Discount</Text>
        </SafeAreaView>
      )}

      <Pressable
        style={[styles.addButton, { opacity: buttonOpacity }]}
        onPress={handleAddDiscount}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <AddIcon />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  addButton: {
    position: "absolute",
    paddingTop: 12,
    paddingLeft: 10,
    right: 16,
    bottom: 50,
    height: 70,
    width: 70,
    backgroundColor: "#38A59F",
    borderRadius: 20,
    marginBottom: -30,
    elevation: 5,
    zIndex: 9999,
  },
});
