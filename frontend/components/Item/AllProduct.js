import {
    StyleSheet,
    Pressable,
    Text,
    Image,
    SafeAreaView,
    View,
} from "react-native";

import Price from "./Price";
import RateIcon from "../icons/RateIcon";
import { useState } from "react";

export default function AllProduct(props) {
    const [freeProduct, setFreeProduct] = useState(true);

    let transaction = "";
    let transactionState = [styles.transactionStyle];

    if (freeProduct) {
        transaction = "Free Ship";
        transactionState.push(styles.freeStyle);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.container__details} onPress={props.onPress}>
                <Text style={transactionState}>{transaction}</Text>
                <Image style={styles.image} source={{ uri: props.image }} />
                <SafeAreaView style={styles.info}>
                    <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>
                        {props.name}
                    </Text>
                    <SafeAreaView style={styles.rowContainer}>
                        <RateIcon color={"#FFC300"} />
                        <Text>{props.rating}</Text>
                    </SafeAreaView>
                    <Price Price={(props.price)} />
                    {/* <Owner Owner={props.Owner} /> */}
                </SafeAreaView>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        height: 320,
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 4,
        width: "45%",
    },

    container__details: {
        justifyContent: "space-between",
        paddingHorizontal: 8,
    },

    image: {
        borderWidth: 1,
        borderColor: "#00000000",
        width: "100%",
        height: 160,
        borderRadius: 8,
    },

    info: {
        justifyContent: "flex-start",
        alignContent: "center",
        marginVertical: 10,
        marginLeft: 8,
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: "600",
    },
    transactionStyle: {
        alignSelf: "flex-start",
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 10,
        paddingVertical: 2,
        paddingHorizontal: 18,
        borderRadius: 8,
    },
    freeStyle: {
        backgroundColor: "#66CCFF",
    },
});
