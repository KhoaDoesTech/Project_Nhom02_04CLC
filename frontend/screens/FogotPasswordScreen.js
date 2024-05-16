import { StyleSheet, View, Modal, Image, Text, Pressable } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
export default function ForgotPasswordScreen(props) {

    function handleResetPassword() {

    }

    return (
        <View animationType="slide">
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require("../assets/images/logo copy.png")} />
                </View>
                <AuthContent isResetPassword onAuthenticate={handleResetPassword} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: "15%",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 8,
    },

    header__image: {
        marginRight: 8,
        width: 35,
    },

    header__content: {
        fontSize: 20,
        fontWeight: "700",
    },

    notify: {
        marginTop: 16,
        marginBottom: 32,
        marginHorizontal: 9,
        width: "70%",
        color: "#ccc",
    },
});
