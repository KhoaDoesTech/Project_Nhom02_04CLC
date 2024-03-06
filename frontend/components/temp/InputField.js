import { View, Pressable, StyleSheet, Image, TextInput } from "react-native";

export default function UsernameInput(props) {

    const icon = props.source;
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={props.source} />
            <TextInput placeholder={props.placeHolder} secureTextEntry={props.isShowed} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "#ccc",
        marginVertical: 8,
        paddingHorizontal: 8,
        paddingVertical: 14,
        borderRadius: 8
    },

    icon: {
        width: 24,
        height: 24,
        marginRight: 8
    }
});
