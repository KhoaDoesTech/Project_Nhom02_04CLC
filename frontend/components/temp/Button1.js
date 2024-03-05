import { Pressable, Text, StyleSheet } from "react-native";

export default function buttonlogin(props) {
    return (
        <Pressable style={styles.buttonlogin} onPress={props.onPress}>
            <Text style={styles.text}>{props.content}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonlogin: {
        alignItems: "center",
        marginVertical: 16,
        padding: 16,
        backgroundColor: "#38A59F",
        width: "100%",
        borderRadius: 8,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        fontFamily: ''
    }
});
