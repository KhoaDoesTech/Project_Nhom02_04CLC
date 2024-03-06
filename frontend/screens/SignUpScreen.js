import { useState } from "react";
import { SafeAreaView, StyleSheet, Modal, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import InputField from "../components/temp/InputField.js";
import ButtonLogin from "../components/temp/Button1.js";
import HomeScreen from "./HomeScreen.js";
export default function SignUpScreen({ navigation }) {

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.header__img_logo} source={require("../assets/images/logo copy.png")} />

        </View>
        <View style={styles.input_container}>
          <Text style={styles.text}>Create your account</Text>
          <InputField placeHolder="Enter User Name" isShowed={false} source={require("../assets/images/icons-user.png")} />
          <InputField placeHolder="Enter Password" isShowed={true} source={require("../assets/images/icons-lock.png")} />
          <InputField placeHolder="Confirm Password" isShowed={true} source={require("../assets/images/icons-lock.png")} />
          <ButtonLogin content="Sign up" onPress={() => navigation.navigate('Home')} />
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '15%',
    marginHorizontal: '5%'
  },

  header__img_logo: {
    marginVertical: 16,
  },

  text: {
    fontSize: 20,
    fontWeight: '700',
  },

  input_container: {
    marginTop: 16
  }

})