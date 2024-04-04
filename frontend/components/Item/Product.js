import { StyleSheet, Pressable, Text, Image, SafeAreaView } from 'react-native';

import PriceFree from './PriceFree';
import ProductName from './ProductName';
import Owner from './Owner';
import Status from './Status';

export default function Product({ onPress }) {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.container__details} onPress={onPress} >
                <Image style={styles.image} source={require('../../assets/images/image2.png')} />
                <SafeAreaView style={styles.info}>
                    <PriceFree />
                    <ProductName />
                    <Owner />
                    <Status />
                </SafeAreaView>
            </Pressable>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        width: '100%',
        height: 130,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 4
    },


    container__details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8
    },

    image: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#00000000',
        width: 100,
        height: 100,
        borderRadius: 8,
    },

    info: {
        flex: 2,
        marginLeft: 16
    }
})