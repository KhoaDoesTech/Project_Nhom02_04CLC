import { StyleSheet, Pressable, Text, Image, SafeAreaView, View } from 'react-native';

import PriceFree from './PriceFree';
import RateIcon from '../icons/RateIcon';
import Owner from './Owner';

export default function TransactionProduct({ onPress }) {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.container__details} onPress={onPress} >
                <Image style={styles.image} source={require('../../assets/images/image2_.png')} />
                <SafeAreaView style={styles.info}>
                    <Text
                        ellipsizeMode="tail"
                        numberOfLines={1}
                        style={styles.text}>Black T-Shirt
                    </Text>
                    <SafeAreaView style={styles.rowContainer}>
                        <RateIcon color={'#FFC300'}/>
                        <Text>5 / 5</Text>
                    </SafeAreaView>
                    <PriceFree/>
                    {/* <Owner Owner={props.Owner} /> */}
                </SafeAreaView>
            </Pressable>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        width: 140,
        height: 230,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 4
    },

    container__details: {
        justifyContent: 'space-between',
        padding: 8,
    },

    image: {
        borderWidth: 1,
        borderColor: '#00000000',
        width: '100%',
        height: 120,
        borderRadius: 8,
    },

    info: {
        justifyContent: 'flex-start',
        alignContent: 'center',
        marginVertical: 10,
        marginLeft: 8
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },
})