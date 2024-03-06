import { SafeAreaView, Text, StyleSheet, View, Image, } from "react-native";
import InputField from "../components/temp/InputField.js";
import Option from "../components/temp/Option.js";
import ButtonLogin from "../components/temp/Button1.js";
import SignUp from "../components/temp/SignUp.js";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../assets/images/logo copy.png")}
          />
        </View>
        <View style={styles.signin_container}>
          <Text style={styles.text}>Sign in to your account</Text>

          <InputField
            source={require("../assets/images/icons-user.png")}
            placeHolder="Enter username"
            isShowed={false}
          />
          <InputField
            source={require("../assets/images/icons-lock.png")}
            placeHolder="Enter password"
            isShowed={true}
          />
          <Option />
          <ButtonLogin content="Sign in to S&C" onPress={() => navigation.navigate('Home')} />
          <SignUp />
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    justifyContent: "center",
  },
  header: {
    marginVertical: '8%',
    marginLeft: '5%',
  },

  signin_container: {
    marginHorizontal: '5%'
  },

  text: {
    fontSize: 20,
    fontWeight: '600'
  }
});
