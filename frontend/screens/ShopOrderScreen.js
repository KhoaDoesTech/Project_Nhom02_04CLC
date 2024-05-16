import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LeftArrowIcon from "../components/icons/LeftArrowIcon";

export default function ShopOrderScreen() {
  const navigation = useNavigation();
  const [buttonOpacity, setButtonOpacity] = useState(1);

  const handlePressIn = () => {
    setButtonOpacity(0.5);
  };

  const handlePressOut = () => {
    setButtonOpacity(1);
  };

  return (
    <Pressable
      style={{ marginTop: 50, marginLeft: 20, opacity: buttonOpacity }}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => navigation.navigate("Inventory")}
    >
      <LeftArrowIcon />
    </Pressable>
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
});