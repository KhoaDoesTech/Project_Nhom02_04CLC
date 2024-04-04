import { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthForm from "./AuthForm";


function AuthContent({ isLogin, isResetPassword, onAuthenticate }) {
    const navigation = useNavigation();

    const [credentialIsInvalid, setCredentialIsInvalid] = useState({
        email: false,
        password: false,
        confirmPassword: false,
    });

    function switchAuthModeHandler() {
        isLogin
            ? navigation.replace("Login")
            : isResetPassword
                ? navigation.replace("FogotPassword")
                : navigation.replace("SignUp");
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
        onAuthenticate({ email, password });
    }

    return (
        <View>
            <AuthForm
                isLogin={isLogin}
                onSubmit={submitHandler}
                credentialInvalid={credentialIsInvalid}
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
