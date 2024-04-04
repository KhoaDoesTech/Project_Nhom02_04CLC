import { useState } from "react";
import { SafeAreaView, Text, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import HomeIcon from "../icons/HomeIcon";
import ProductIcon from "../icons/ProductIcon";
import MapIcon from "../icons/MapIcon";
import MessageIcon from "../icons/MessageIcon";
import AddIcon from "../icons/AddIcon";

export default function Footer() {
    const navigation = useNavigation();
    const [home, setHome] = useState(true);
    const [product, setProduct] = useState(false);
    const [map, setMap] = useState(false);
    const [message, setMessage] = useState(false);

    function openHome() {
        setHome(true);
        setProduct(false);
        setMap(false);
        setMessage(false);
        navigation.navigate('Home');
    }

    function openProduct() {
        setHome(false);
        setProduct(true);
        setMap(false);
        setMessage(false);
        navigation.navigate('Product');
    }

    function openMap() {
        setHome(false);
        setProduct(false);
        setMap(true);
        setMessage(false);
        navigation.navigate('Map');
    }

    function openMessage() {
        setHome(false);
        setProduct(false);
        setMap(false);
        setMessage(true);
        navigation.navigate('Message');
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.addBtn}>
                <AddIcon />
            </Pressable>
            <View style={styles.itemContainer}>
                <Pressable style={styles.item} onPress={openHome}>
                    <HomeIcon color={home ? '#38A59F' : '#858585'} />
                    <Text
                        style={
                            home
                                ? [styles.text, styles.isClicked]
                                : [styles.text, styles.isNotClicked]
                        }
                    >
                        Home
                    </Text>
                </Pressable>
                <Pressable style={styles.item} onPress={openProduct}>
                    <ProductIcon color={product ? '#38A59F' : '#858585'} />
                    <Text
                        style={
                            product
                                ? [styles.text, styles.isClicked]
                                : [styles.text, styles.isNotClicked]
                        }
                    >
                        Product
                    </Text>
                </Pressable>

                <View style={{ marginHorizontal: 10 }}></View>

                <Pressable style={styles.item} onPress={openMap}>
                    <MapIcon width={28} height={28} color={map ? '#38A59F' : '#858585'} />
                    <Text
                        style={
                            map
                                ? [styles.text, styles.isClicked]
                                : [styles.text, styles.isNotClicked]
                        }
                    >
                        Map
                    </Text>
                </Pressable>
                <Pressable style={styles.item} onPress={openMessage}>
                    <MessageIcon color={message ? '#38A59F' : '#858585'} />
                    <Text
                        style={
                            message
                                ? [styles.text, styles.isClicked]
                                : [styles.text, styles.isNotClicked]
                        }
                    >
                        message
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "100%",

    },
    itemContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 90,
        paddingHorizontal: 24,
        borderTopWidth: 0.1,
        elevation: 2,
        backgroundColor: '#fff'
        // backgroundColor: "blue",
    },

    item: {
        alignItems: "center",
    },

    text: {
        fontWeight: "600",
    },

    isClicked: {
        color: "#38A59F",
    },

    isNotClicked: {
        color: "#858585",
    },

    addBtn: {
        paddingTop: 6,
        paddingLeft: 4,
        height: 59,
        width: 59,
        backgroundColor: "#38A59F",
        borderRadius: 100,
        marginBottom: -30,
        elevation: 5,
        zIndex: 9999,
    },
});
