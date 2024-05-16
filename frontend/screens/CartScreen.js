import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../store/auth-context';
import ProductCart from '../components/Item/ProductCart';
import { StyleSheet, View, ScrollView, SafeAreaView, Text } from 'react-native';
import FooterPurchase from '../components/footer/FooterPurchase';
import { getListCart } from '../API/cart';

export default function CartScreen() {
  const [cartItem, setCartItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const fetchCartItem = async () => {
      try {
        const userId = authCtx.userInfo.userId;
        const accessToken = authCtx.token;
        const response = await getListCart(userId, accessToken);
        if (response) {
          setCartItem(response);
          setIsLoading(false)
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setIsLoading(false)
      } finally {
        setIsLoading(false);
      }
    };
    fetchCartItem();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.list}>
        {cartItem.map((item) => (
          <ProductCart
            key={item?.productId}
            image={item?.image}
            productName={item?.productName}
            price={item?.price}
            quantity={item?.quantity}
          />
        ))}
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
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
