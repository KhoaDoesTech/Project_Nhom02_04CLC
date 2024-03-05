import { SafeAreaView, Text, StyleSheet, Pressable } from "react-native";

import HomeIcon from "../icons/HomeIcon";
import ProductIcon from "../icons/ProductIcon";
import MapIcon from "../icons/MapIcon";
import MessageIcon from "../icons/MessageIcon";

export default function Footer() {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.addBtn}>
                <Text>+</Text>
            </Pressable>
            <SafeAreaView style={styles.itemContainer}>
                <Pressable style={styles.item}>
                    <HomeIcon />
                    <Text>Home</Text>
                </Pressable>
                <Pressable style={styles.item}>
                    <ProductIcon />
                    <Text>Product</Text>
                </Pressable>
                <Pressable style={styles.item}>
                    <MapIcon />
                    <Text>Map</Text>
                </Pressable>
                <Pressable style={styles.item}>
                    <MessageIcon />
                    <Text>message</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
    },
    itemContainer: {
        left: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 100,
        paddingHorizontal: 24,
        borderTopWidth: 0.1,
        elevation: 2,
        // backgroundColor: "blue",
    },

    item: {
        alignItems: "center",
    },

    addBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 59,
        width: 59,
        backgroundColor: '#38A59F',
        borderRadius: 100,
        marginBottom: -30,
        elevation: 2,
        zIndex: 9999
    }
});
