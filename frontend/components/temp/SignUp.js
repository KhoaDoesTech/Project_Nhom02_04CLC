import { View, Text, Pressable, StyleSheet } from "react-native";

export default function SignUp() {
    return (
        <View style={styles.container}>
            <Text>Don't have account?</Text>
            <Pressable >
                <Text style={styles.text}>Sign up Now</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 10
    },

    text: {
        color: '#38A59F',
        paddingHorizontal: 4
    }
});


