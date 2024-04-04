import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import InputField from "./InputField";
import Button from "./components/Button";
import Option from "./components/Option";
import SignUp from "./components/SignUp";


function AuthForm({ isLogin, isResetPassword, onSubmit, credentialInvalid }) {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

    const {
        email: emailIsValid,
        password: passwordIsValid,
        confirmPassword: passwordDontMatch,
    } = credentialInvalid;

    function updateInputValueHandler(inputype, enteredValue) {
        switch (inputype) {
            case "email":
                setEnteredEmail(enteredValue);
                break;
            case "password":
                setEnteredPassword(enteredValue);
                break;
            case "confirmPassword":
                setEnteredConfirmPassword(enteredValue);
                break;
        }
    }

    function submitHandler() {
        onSubmit({
            email: enteredEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
        });
    }
    return (
        <View style={styles.signin_container}>
            {isLogin ? (
                <Text style={styles.text}>Sign in to your account</Text>
            ) : !isResetPassword ? (
                <Text style={styles.text}>Create your account</Text>
            ) : (
                <Text style={styles.text}>Reset Password</Text>
            )}

            <InputField
                source={require("../../assets/images/icons-user.png")}
                placeHolder="Enter email"
                secure={false}
                onChange={updateInputValueHandler.bind(this, "email")}
                keyboardType="email-address"
            />
            <InputField
                source={require("../../assets/images/icons-lock.png")}
                placeHolder="Enter password"
                secure={true}
                onChange={updateInputValueHandler.bind(this, "password")}
            />
            {isResetPassword ||
                (!isLogin && (
                    <InputField
                        source={require("../../assets/images/icons-lock.png")}
                        placeHolder="Confirm password"
                        secure={true}
                        onChange={updateInputValueHandler.bind(this, "confirmPassword")}
                    />
                ))}
            {isLogin && !isResetPassword && (
                <>
                    <Option />
                    <Button content="Sign in to S&C" onPress={submitHandler} />
                    <SignUp />
                </>
            )}

            {!isLogin && !isResetPassword && (
                <Button content="Create account" onPress={submitHandler} />
            )}
            {!isLogin && isResetPassword && (
                <Button content="Reset password" onPress={submitHandler} />
            )}

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

export default AuthForm;
