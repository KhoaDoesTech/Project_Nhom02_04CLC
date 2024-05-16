import {
    StyleSheet,
    SafeAreaView,
    Image,
    View,
    ScrollView,
    Touchable,
    Pressable,
} from "react-native";
import InputField from "../components/Auth/InputField";
import CategoryItem from "../components/CategoryItem";
import Product from "../components/Item/Product";
import { useState, useEffect } from "react";
import useDebounce from "../hooks";
import { searchProduct } from "../API/Product";

export default function SearchScreen({ navigation }) {
    const [inputValue, setInputValue] = useState("");
    const [searchResult, setSearchResult] = useState();
    const debounceVal = useDebounce({ value: inputValue, delay: 500 });

    useEffect(() => {
        if (!debounceVal.trim()) {
            return;
        }
        async function fetchSearchProduct(searchTerm) {
            const response = await searchProduct(searchTerm);
            setSearchResult(response);
        }
        fetchSearchProduct(debounceVal);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceVal]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack('Home')}>
                    <Image source={require("../assets/images/icons-back-arrow.png")} />
                </Pressable>

                <InputField
                    placeHolder="what are you looking for?"
                    source={require("../assets/images/search.png")}
                    paddingVertical={4}
                    borderRadius={999}
                    onChange={setInputValue}
                    alignItems="center"
                    width="80%"
                />
            </View>
            <View style={styles.categoriesStyles}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <CategoryItem children="Shirt" />
                    <CategoryItem children="Tshirt" />
                    <CategoryItem children="Jacket" />
                    <CategoryItem children="Blouse" />
                    <CategoryItem children="Dress" />
                    <CategoryItem children="Shorts" />
                    <CategoryItem children="Pants" />
                    <CategoryItem children="Skirt" />
                    <CategoryItem children="Sweater" />
                    <CategoryItem children="Jeans" />
                </ScrollView>
            </View>
            <ScrollView style={styles.searchResult}>
                {searchResult && searchResult.map((product) =>
                    <Product key={product._id} product={product} onPress={() =>
                        navigation.navigate("ProductDetail", {
                            source: "HomePageScreen",
                            id: product._id,
                            image: product.product_thumb,
                            name: product.product_name,
                            price: product.product_price,
                            attributes: product.product_attributes,
                            description: product.product_description,
                            rating: product.product_ratingsAverage,
                        })}
                    />)}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingTop: 20

    },
    categoriesStyles: {
        marginBottom: "5%",
        marginLeft: 10,
        marginRight: 10,
        justify: "center",
        flexDirection: "row",
    },
    header: {
        width: "100%",
        marginVertical: '30px',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    searchResult: {
        paddingHorizontal: 18
    }
});
