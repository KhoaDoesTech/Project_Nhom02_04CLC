import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";

import { AuthContext } from "../store/auth-context";


const MenuScreen = () => {
  const navigation = useNavigation();

  const authCtx = useContext(AuthContext);
  const info = authCtx.userInfo;

  return (
    <Pressable style={profileMenuStyles.button} onPress={() => navigation.navigate("Profile")}>
      <Image source={{
        uri: 'https://i.pinimg.com/564x/40/70/d9/4070d9574b34038f45af74f6221ec19a.jpg'
      }}

        style={profileMenuStyles.image}
      />
      <View style={{ justifyContent: 'center' }}>
        <Text style={profileMenuStyles.text1}>{info.username}</Text>
        <Text style={profileMenuStyles.text2}>{info.email}</Text>
      </View>
    </Pressable>
  )
}

const profileMenuStyles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 16,
    margin: 20
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  text2: {
    fontSize: 14,
  }
})

export default MenuScreen;