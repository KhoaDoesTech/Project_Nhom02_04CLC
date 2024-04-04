import { Image, SafeAreaView, StyleSheet, ScrollView, Text, Pressable } from "react-native";
import RateIcon from "../icons/RateIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

export default function ProductRating({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={[styles.detailContainer, {flexDirection: 'row'}]}>
                <SafeAreaView>
                    <Text style={styles.title}>Product Reviews</Text>
                    <SafeAreaView style={[styles.rowContainer, {paddingRight: 20}]}>
                        <RateIcon color={'#FFC300'}/>
                        <RateIcon color={'#FFC300'}/>
                        <RateIcon color={'#FFC300'}/>
                        <RateIcon color={'#FFC300'}/>
                        <RateIcon color={'#FFC300'}/>
                        <Text style={styles.statisticText}>5 / 5</Text>
                        <Text style={styles.statisticText}>{"(1 review)"}</Text>
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={styles.rowContainer}>
                    <Text style={styles.more}>All</Text>
                    <RightArrowIcon/>
                </SafeAreaView>
            </Pressable>
            <SafeAreaView style={styles.reviewDetail}>
                <SafeAreaView style={[styles.rowContainer, {marginBottom: 0}]}>
                    <Text style={styles.userName}>hoangdang</Text>
                    <Text style={styles.reviewDate}>01/04/2024</Text>
                </SafeAreaView>
                <SafeAreaView style={[styles.rowContainer, {paddingRight: 20}]}>
                    <RateIcon color={'#FFC300'}/>
                    <RateIcon color={'#FFC300'}/>
                    <RateIcon color={'#FFC300'}/>
                    <RateIcon color={'#FFC300'}/>
                    <RateIcon color={'#FFC300'}/>
                </SafeAreaView>
                <Text style={styles.reviewContent}>Good product</Text>
            </SafeAreaView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8E8E8',
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    statisticText: {
        fontSize: 16,
        marginHorizontal: 5,
    },
    detailContainer: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    more: {
        fontSize: 16,
        color: '#38A59F'
    },
    reviewDetail: {
        marginTop: 10,
        padding: 20,
        borderTopWidth: 0.5
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
    },
    reviewDate: {
        fontSize: 14,
        marginHorizontal: 10,
    },
    reviewContent: {
        fontSize: 16
    }
});
