import { StyleSheet, Pressable, Text, Image, SafeAreaView } from 'react-native';

import PriceNotFree from './PriceNotFree';
import ProductName from './ProductName';
import Owner from './Owner';
import Status from './Status';
import CheckBox from './CheckBox';
import Quantity from './Quantity';
import Delete from './Delete';
import { formatCurrency } from '../../util/common';

export default function ProductCart(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.container__details}>
                <CheckBox style={styles.checkbox} />
                <Image style={styles.image} source={{ uri: props.image }} />
                <SafeAreaView style={styles.info}>
                    <Owner />
                    <ProductName ProductName={props.productName} />
                    <PriceNotFree price={formatCurrency(props.price)} />
                    <Quantity quantity={props.quantity} />
                </SafeAreaView>
                <SafeAreaView style={styles.status}>
                    <Delete />
                </SafeAreaView>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 4
    },
    container__details: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8
    },

    image: {
        borderWidth: 1,
        borderColor: '#00000000',
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 16,
    },
    info: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    },
    status: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 16,
    }
});