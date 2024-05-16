import { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthForm from "./AuthForm";
import SignUp from "./components/SignUp";

function AuthContent({ isLogin, isResetPassword, onAuthenticate }) {
    const navigation = useNavigation();

    const mode = isLogin ? 'login' : (isResetPassword ? 'reset-password' : 'signup');

    const [credentialIsInvalid, setCredentialIsInvalid] = useState({
        email: false,
        password: false,
        confirmPassword: false,
    });

    function switchAuthModeHandler() {
        if (isLogin) {
            navigation.replace("SignUp");
        } else {
            navigation.replace("Login");
        }
    }

    function submitHandler(credentials) {
        let { email, password, confirmPassword } = credentials;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes("@");
        const passwordIsValid = password.length > 1;
        const passwordAreEqual = password === confirmPassword;

        if (!emailIsValid || !passwordIsValid || (!isLogin && !passwordAreEqual)) {
            Alert.alert("Invalid input", "Please check your entered credentials");
            setCredentialIsInvalid({
                email: !emailIsValid,
                password: !passwordIsValid,
                confirmPassword: !passwordIsValid || !passwordAreEqual,
            });
            return;
        }
        onAuthenticate({ mode, email, password });
    }

    return (
        <View>
            <AuthForm
                isLogin={isLogin}
                isResetPassword={isResetPassword}
                onSubmit={submitHandler}
                credentialInvalid={credentialIsInvalid}
            />
            <SignUp
                isLogin={isLogin}
                isResetPassword={isResetPassword}
                onPress={switchAuthModeHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    signin_container: {
        marginHorizontal: "5%",
    },
    text: {
        fontSize: 20,
        fontWeight: "600",
    },
});

export default AuthContent;
