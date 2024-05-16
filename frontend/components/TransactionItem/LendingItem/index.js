import { StyleSheet, Text, SafeAreaView, ScrollView, Pressable } from 'react-native';

import Product from '../../Item/TransactionProduct';
import RightArrowIcon from '../../icons/RightArrowIcon';
import { useNavigation } from '@react-navigation/native';

export default function LendingItem() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
          <SafeAreaView style={styles.rowContainer}>
            <Text style={styles.transaction}>Products For Lend</Text>
            <Pressable style={styles.rowContainer}>
                <Text style={styles.viewAll}>View All</Text>
                <RightArrowIcon/>
            </Pressable>
          </SafeAreaView>
          <ScrollView
            horizontal={true} 
            contentContainerStyle={{ flexDirection: 'row' }}
            showsHorizontalScrollIndicator={false}
          >
            <Product onPress={() => navigation.navigate('ProductDetail')} />
            <Product onPress={() => navigation.navigate('ProductDetail')} />
            <Product onPress={() => navigation.navigate('ProductDetail')} />
            <Product onPress={() => navigation.navigate('ProductDetail')} />
          </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8E8E8',
        padding: 10,
        marginVertical: 5
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    transaction: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewAll: {
        fontSize: 18,
        fontWeight: '400'
    }
});