import { StyleSheet, View, Image, Text } from 'react-native';

export default function Owner(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.Owner}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 4,
        alignItems: 'center'
    },

    text: {
        fontSize: 12,
        fontWeight: '500',
        marginHorizontal: 4
    }
});