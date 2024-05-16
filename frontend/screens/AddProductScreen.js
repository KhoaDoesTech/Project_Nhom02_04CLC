import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LeftArrowIcon from "../components/icons/LeftArrowIcon";
import { addProduct } from "../API/Product";
import { AuthContext } from "../store/auth-context";
// import * as ImagePicker from "expo-image-picker";

export default function AddProductScreen() {
  const authCtx = useContext(AuthContext);
  const userId = authCtx.userInfo.userId;
  const accessToken = authCtx.token;

  const navigation = useNavigation();
  const [buttonOpacity, setButtonOpacity] = useState(1);
  // const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const [productName, setProductName] = useState("");
  const [productNameLength, setProductNameLength] = useState(0);
  const [showProductNameError, setShowProductNameError] = useState(false);

  const [productDescription, setProductDescription] = useState("");
  const [productDescriptionLength, setProductDescriptionLength] = useState(0);
  const [showProductDescriptionError, setShowProductDescriptionError] =
    useState(false);

  const [productPrice, setProductPrice] = useState("");
  const [showProductPriceError, setShowProductPriceError] = useState(false);

  const [productQuantity, setProductQuantity] = useState("");
  const [showProductQuantityError, setShowProductQuantityError] =
    useState(false);

  const [showProductAttributes, setShowProductAttributes] = useState(false);
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");
  const [showProductAttributeError, setShowProductAttributeError] =
    useState(false);

  const handlePressIn = () => {
    setButtonOpacity(0.5);
  };

  const handlePressOut = () => {
    setButtonOpacity(1);
  };

  // const handleImagePicker = async () => {
  //   // Request camera roll permissions
  //   const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //   if (status !== "granted") {
  //     alert("Sorry, we need camera roll permissions to make this work!");
  //     return;
  //   }

  //   // Open the image picker
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   if (!result.canceled) {
  //     setSelectedImageUrl(result.uri);
  //   }
  // };

  const handleProductDescriptionChange = (text) => {
    setProductDescription(text);
    setProductDescriptionLength(text.length);
    setShowProductDescriptionError(text.trim() === "");
  };

  const handleProductNameChange = (text) => {
    setProductName(text);
    setProductNameLength(text.length);
    setShowProductNameError(text.trim() === "");
  };

  const handleProductPriceChange = (text) => {
    setProductPrice(text);
    setShowProductPriceError(text.trim() === "");
  };

  const handleProductQuantityChange = (text) => {
    setProductQuantity(text);
    setShowProductQuantityError(text.trim() === "");
  };

  const handleSubmit = async () => {
    setShowProductNameError(productName.trim() === "");
    setShowProductDescriptionError(productDescription.trim() === "");
    setShowProductPriceError(productPrice.trim() === "");
    setShowProductQuantityError(productQuantity.trim() === "");
    setShowProductAttributeError(
      brand.trim() === "" || size.trim() === "" || material.trim() === ""
    );

    if (
      productName.trim() === "" ||
      productDescription.trim() === "" ||
      productPrice.trim() === "" ||
      productQuantity.trim() === "" ||
      brand.trim() === "" ||
      size.trim() === "" ||
      material.trim() === ""
    ) {
      return;
    } else {
      try {
        const response = await addProduct(
          {
            name: productName,
            thumb: '../assets/images/x.png',
            description: productDescription, 
            price: productPrice, 
            quantity: productQuantity, 
            attribute: {
              brand: brand,
              size: size,
              material: material
            }
          },
          userId,
          accessToken
        );
        navigation.goBack();
      } catch (error) {}
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F1F1F1" }}>
      <SafeAreaView style={styles.container}>
        <Pressable
          style={{
            marginTop: 50,
            marginLeft: 20,
            opacity: buttonOpacity,
            flex: 1,
          }}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => navigation.goBack()}
        >
          <LeftArrowIcon />
        </Pressable>
        <Text style={styles.headerText}>Adding Product</Text>
      </SafeAreaView>

      <ScrollView>
        {/* <SafeAreaView style={styles.itemContainer}>
        <Pressable
          style={[
            styles.imageFrame,
            selectedImageUrl && { borderColor: "#38A59F" },
          ]}
          onPress={handleImagePicker}
        >
          {selectedImageUrl ? (
            <Image source={{ uri: selectedImageUrl }} style={styles.image} />
          ) : (
            <Text style={styles.imageText}>Tap to select image</Text>
          )}
        </Pressable>
      </SafeAreaView> */}

        <SafeAreaView style={styles.itemContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.label}>Product name:</Text>
            <Text style={styles.label}>{productNameLength}/100</Text>
          </View>
          <TextInput
            style={styles.input}
            value={productName}
            onChangeText={handleProductNameChange}
            maxLength={100}
            placeholder="Enter product name"
            multiline
          />
          {showProductNameError && (
            <Text style={styles.error}>* Please enter a product name</Text>
          )}
        </SafeAreaView>

        <SafeAreaView style={styles.itemContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.label}>Product description:</Text>
            <Text style={styles.label}>{productDescriptionLength}/1000</Text>
          </View>
          <TextInput
            style={styles.input}
            value={productDescription}
            onChangeText={handleProductDescriptionChange}
            maxLength={1000}
            placeholder="Enter product description"
            multiline
          />
          {showProductDescriptionError && (
            <Text style={styles.error}>
              * Please enter a product description
            </Text>
          )}
        </SafeAreaView>

        <SafeAreaView style={styles.itemContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.label}>Product price:</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={productPrice}
            onChangeText={handleProductPriceChange}
            placeholder="Enter product price"
          />
          {showProductPriceError && (
            <Text style={styles.error}>* Please enter a product price</Text>
          )}
        </SafeAreaView>

        <SafeAreaView style={styles.itemContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.label}>Product quantity:</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={productQuantity}
            onChangeText={handleProductQuantityChange}
            placeholder="Enter product quantity"
          />
          {showProductQuantityError && (
            <Text style={styles.error}>* Please enter a product quantity</Text>
          )}
        </SafeAreaView>

        <SafeAreaView style={styles.itemContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.label}>Product attribute:</Text>
          </View>
          <TouchableOpacity
            style={styles.arrowContainer}
            onPress={() => setShowProductAttributes(!showProductAttributes)}
          >
            {showProductAttributeError && (
              <Text style={styles.error}>
                * Please enter all product attributes
              </Text>
            )}
            <Text style={styles.arrow}>
              {showProductAttributes ? "▲" : "▼"}
            </Text>
          </TouchableOpacity>
          {showProductAttributes && (
            <View style={styles.attributesContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Brand:</Text>
                <TextInput
                  style={styles.input}
                  value={brand}
                  onChangeText={setBrand}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Size:</Text>
                <TextInput
                  style={styles.input}
                  value={size}
                  onChangeText={setSize}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Material:</Text>
                <TextInput
                  style={styles.input}
                  value={material}
                  onChangeText={setMaterial}
                />
              </View>
            </View>
          )}
        </SafeAreaView>
        <View style={{ height: 100 }}></View>
      </ScrollView>

      <SafeAreaView style={styles.submitContainer}>
        <Pressable style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.text}>Create</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginVertical: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 20,
    flex: 9,
    paddingLeft: 60,
    textAlignVertical: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  imageFrame: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#38A59F",
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  imageText: {
    color: "#38A59F",
    fontWeight: "600",
  },
  label: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    paddingBottom: 0,
  },
  error: {
    fontStyle: "italic",
    color: "#B50000",
    marginTop: 5,
  },
  submitContainer: {
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 30,
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5",
    marginBottom: -30,
    elevation: 5,
    zIndex: 9999,
  },
  submitButton: {
    marginVertical: 15,
    paddingHorizontal: 100,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#38A59F",
  },
  attributesContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
