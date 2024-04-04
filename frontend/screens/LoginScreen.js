import axios from "axios";
import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  Alert,
} from "react-native";
import { AuthContext } from "../store/auth-context.js";
import { login } from "../util/login.js";

import AuthContent from "../components/Auth/AuthContent.js";

export default function LoginScreen() {
  const authCtx = useContext(AuthContext);

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await login({ email, password });
      // Handle successful login
      authCtx.authenticate(
        response.tokens.accessToken,
        response.tokens.refreshToken,
        response.user.usr_name,
        response.user.usr_email
      );
    } catch (error) {
      // Handle login error
      console.error("Login error:", error.stack);
      Alert.alert(
        "Login Failed",
        "Please check your credentials and try again."
      );
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("../assets/images/logo copy.png")} />
        </View>
        <AuthContent isLogin onAuthenticate={handleLogin} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    justifyContent: "center",
  },
  header: {
    marginVertical: "8%",
    marginLeft: "5%",
  },
});
