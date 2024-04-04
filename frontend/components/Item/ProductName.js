import { StyleSheet, View, Text } from 'react-native';

export default function ProductName() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Black T-Shirt</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 4,

    },

    text: {
        fontSize: 21,
        fontWeight: '600',
    },

});