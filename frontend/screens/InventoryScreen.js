import {
  Pressable,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/auth-context";
import HeaderButton from "../components/HeaderButton";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import MoreIcon from "../components/icons/MoreIcon";
import ShopProductIcon from "../components/icons/ShopProductIcon";
import ShopDiscountIcon from "../components/icons/ShopDiscountIcon";
import ShopOrderIcon from "../components/icons/ShopOrderIcon";
import { useNavigation } from "@react-navigation/native";

const InventoryScreen = () => {
  const authCtx = useContext(AuthContext);
  const info = authCtx.userInfo;

  const navigation = useNavigation();

  const [productButtonOpacity, setProductButtonOpacity] = useState(1);
  const [discountButtonOpacity, setDiscountButtonOpacity] = useState(1);
  const [orderButtonOpacity, setOrderButtonOpacity] = useState(1);

  const handleProductPressIn = () => {
    setProductButtonOpacity(0.5);
  };

  const handleProductPressOut = () => {
    setProductButtonOpacity(1);
  };

  const handleDiscountPressIn = () => {
    setDiscountButtonOpacity(0.5);
  };

  const handleDiscountPressOut = () => {
    setDiscountButtonOpacity(1);
  };

  const handleOrderPressIn = () => {
    setOrderButtonOpacity(0.5);
  };

  const handleOrderPressOut = () => {
    setOrderButtonOpacity(1);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={screenStyle}>
        <View style={headerStyle.container}>
          <Text style={headerStyle.text}>My Inventory</Text>
          <HeaderButton
            icon={<Ionicons name="reorder-three" size={30} color="black" />}
            onPress={() => navigation.openDrawer("HomeMenu")}
          />
        </View>
        <View style={profileMenuStyles.view}>
          <View style={profileMenuStyles.image.container}>
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/40/70/d9/4070d9574b34038f45af74f6221ec19a.jpg",
              }}
              style={profileMenuStyles.image.image}
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={profileMenuStyles.text1}>{info.username}</Text>
            <Text style={profileMenuStyles.text2}>ID: {info.userId}</Text>
          </View>
        </View>

        <Pressable
          style={[itemStyles.container, { productButtonOpacity }]}
          onPressIn={handleProductPressIn}
          onPressOut={handleProductPressOut}
          onPress={() => navigation.navigate("ShopProduct")}
        >
          <View style={{ flexDirection: "row" }}>
            <ShopProductIcon />
            <Text style={itemStyles.text}>Product</Text>
          </View>
          <MoreIcon />
        </Pressable>

        <Pressable
          style={[itemStyles.container, { discountButtonOpacity }]}
          onPressIn={handleDiscountPressIn}
          onPressOut={handleDiscountPressOut}
          onPress={() => navigation.navigate("ShopDiscount")}
        >
          <View style={{ flexDirection: "row" }}>
            <ShopDiscountIcon />
            <Text style={itemStyles.text}>Discount</Text>
          </View>
          <MoreIcon />
        </Pressable>

        <Pressable
          style={[itemStyles.container, { orderButtonOpacity }]}
          onPressIn={handleOrderPressIn}
          onPressOut={handleOrderPressOut}
          onPress={() => navigation.navigate("ShopOrder")}
        >
          <View style={{ flexDirection: "row" }}>
            <ShopOrderIcon />
            <Text style={itemStyles.text}>Order</Text>
          </View>
          <MoreIcon />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const screenStyle = StyleSheet.create({
  flex: 1,
  marginTop: StatusBar.currentHeight,
});

const headerStyle = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderColor: "#D9D9D9",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 10,
  },

  text: {
    fontSize: 26,
    fontWeight: "bold",
  },
});

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

const profileMenuStyles = StyleSheet.create({
  view: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#E5E5E5",
  },
  image: {
    container: {
      marginHorizontal: "5%",
      marginVertical: "2%",
      alignItems: "center",
    },
    image: {
      width: 75,
      height: 75,
      borderRadius: 20,
      marginVertical: 10,
    },
  },
  text1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 14,
  },
});

const itemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#D5D5D5",
    marginHorizontal: "3%",
    marginVertical: "3%",
    paddingHorizontal: "5%",
    paddingVertical: "3%",
    borderRadius: 15,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
  },
});

export default InventoryScreen;
