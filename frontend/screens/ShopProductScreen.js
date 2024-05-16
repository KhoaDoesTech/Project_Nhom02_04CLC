import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { getProductByShopId } from "../API/Product";
import { AuthContext } from "../store/auth-context";
import { useNavigation } from "@react-navigation/native";
import LeftArrowIcon from "../components/icons/LeftArrowIcon";
import AddIcon from "../components/icons/AddIcon";
import ProductInShop from "../components/Item/ProductInShop";

export default function ShopProductScreen() {
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
      <SafeAreaView style={{ flexDirection: "row" }}>
        <Pressable
          style={{ marginTop: 50, marginLeft: 20, opacity: buttonOpacity, flex: 1 }}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => navigation.goBack()}
        >
          <LeftArrowIcon />
        </Pressable>
        <Text style={styles.headerText}>Shop Product</Text>
      </SafeAreaView>

      {productList.length > 0 ? (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={productList}
            renderItem={({ item }) => (
              <ProductInShop
                key={item._id}
                id={item._id}
                image={item.product_thumb}
                name={item.product_name}
                price={item.product_price}
                quantity={item.product_quantity}
              />
            )}
          />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>No Product</Text>
        </SafeAreaView>
      )}

      <Pressable
        style={[styles.addButton, { opacity: buttonOpacity }]}
        onPress={() => navigation.navigate("AddProduct")}
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
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 20,
    flex: 9,
    paddingLeft: 60,
    textAlignVertical: 'center'
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
