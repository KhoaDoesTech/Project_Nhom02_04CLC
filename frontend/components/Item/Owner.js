import { StyleSheet, View, Image, Text } from 'react-native';

export default function Owner() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/avatar4.png')} />
            <Text style={styles.text}>Linh Nguyen</Text>
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