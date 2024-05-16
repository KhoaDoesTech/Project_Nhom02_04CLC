import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignUp({ isResetPassword, isLogin, onPress }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>
                {isLogin && !isResetPassword && "Don't have account ? "}

                {!isLogin && !isResetPassword && "Already have account"}
                {isResetPassword && "Already have account"}
            </Text>
            <Pressable onPress={onPress}>
                <Text style={styles.text}>
                    {isLogin && !isResetPassword && "Sign up now "}

                    {!isLogin && !isResetPassword && "Sign in"}
                    {isResetPassword && "Sign in"}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginHorizontal: 10,
    },

    text: {
        color: "#38A59F",
        paddingHorizontal: 4,
    },
});
