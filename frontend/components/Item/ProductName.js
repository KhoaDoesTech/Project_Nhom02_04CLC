import { StyleSheet, View, Text } from 'react-native';

export default function ProductName(props) {
    return (
        <View style={styles.container}>
            <Text numberOfLines={1} style={styles.text}>{props.ProductName}</Text>
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