import { StyleSheet, Pressable, Text, Image, SafeAreaView, ImageBackground } from 'react-native';

import PriceFree from './PriceFree';
import ProductName from './ProductName';
import Owner from './Owner';
import Status from './Status';
import { formatCurrency } from '../../util/common';

export default function Product(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.container__details} onPress={props.onPress}>
                <Image style={styles.image} source={{ uri: `${props.product.product_thumb}` }} />
                <SafeAreaView style={styles.info}>
                    {props.product?.product_price ? <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{formatCurrency(props.product?.product_price)}</Text> : <PriceFree />}

                    <ProductName ProductName={props.product?.product_name} />
                    <Owner Owner={props.product?.product_description} />
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