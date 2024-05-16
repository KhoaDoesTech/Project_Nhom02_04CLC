import { StyleSheet, View, Text } from 'react-native';

export default function PriceNotFree(props) {
    return (
        <View >
            <Text style={styles.text}>{props.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: '600'
    }
});