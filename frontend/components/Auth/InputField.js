import { View, Pressable, StyleSheet, Image, TextInput } from "react-native";

export default function InputField(props) {
    const icon = props.source;
    return (
        <View style={[styles.container, { ...props }]}  >
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
        width: '100%',
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
        width: '100%',
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 4,
        fontSize: 16,
        overflow: 'hidden'
    },
    inputInvalid: {
        backgroundColor: '#fcdcbf',
    },
});
