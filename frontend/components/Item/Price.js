import { StyleSheet, View, Text } from "react-native";
import { formatCurrency } from "../../util/common";

import Gift from "../icons/Gift";
export default function Price(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formatCurrency(props.Price)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    justifyContent: "space-evenly",
    height: 24,
    width: "100%",
    alignItems: "flex-start",
    padding: 2,
    borderRadius: 20,
  },

  icon: {
    alignItems: "center",
  },

  text: {
    fontWeight: "600",
    textAlign: "left"
  },
});
