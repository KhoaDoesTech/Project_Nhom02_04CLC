import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    Pressable,
    FlatList
} from "react-native";
import Toast from 'react-native-toast-message';

import AllProduct from "../../Item/AllProduct";
import { getAllProduct } from "../../../API/Product/index.js";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

export default function AllProductItem() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        async function fetchAllProduct() {
            try {
                const products = await getAllProduct();
                setProductList(products);
            } catch (error) {
                Toast.show(error)
            }
        }
        fetchAllProduct();
    }, []);

    const navigation = useNavigation();
    const [freeProduct, setFreeProduct] = useState(true);

    let transactionState = [];

    if (freeProduct) transactionState.push(styles.freeStyle);

    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.rowContainer}>
                <Text style={styles.transaction}>All Products</Text>
            </SafeAreaView>
            <FlatList
                data={productList}
                renderItem={({ item }) => (
                    <AllProduct
                        image={item.product_thumb}
                        name={item.product_name}
                        price={item.product_price}
                        rating={item.product_ratingsAverage}
                        onPress={() =>
                            navigation.navigate("ProductDetail", {
                                source: "HomePageScreen",
                                id: item._id,
                                image: item.product_thumb,
                                name: item.product_name,
                                price: item.product_price,
                                attributes: item.product_attributes,
                                description: item.product_description,
                                rating: item.product_ratingsAverage,
                            })
                        }
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2} // Set number of columns to 2
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E8E8E8",
        paddingHorizontal: 10,
        paddingBottom: 230,
        marginVertical: 0,
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    transaction: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
