import { View, Pressable, StyleSheet, Image, TextInput } from "react-native";

export default function InputField(props) {
    const icon = props.source;
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={props.source} />
            <TextInput
                style={[styles.input]}
                placeholder={props.placeHolder}
                secureTextEntry={props.secure}
                onChangeText={props.onChange}
                value={props.value}
                keyboardType={props.keyboardType}
            />
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
        borderRadius: 8,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: '#f9beda',
        borderRadius: 4,
        fontSize: 16,
    },
    inputInvalid: {
        backgroundColor: '#fcdcbf',
    },
});
