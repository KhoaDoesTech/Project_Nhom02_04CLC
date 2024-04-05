import { StyleSheet, View, Text } from 'react-native';

export default function PriceNotFree() {
    return (
        <View >
                <Text style={styles.text}>12$</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: '600'
    }
});