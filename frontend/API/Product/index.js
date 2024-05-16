import api from "../API";
import get from 'lodash/get'
const PRODUCT_URL = '/v1/api/product';

export async function getAllProduct() {
    try {
        const respone = await api.get(`${PRODUCT_URL}/advanced-search`);
        return respone.data.metadata;
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}

export async function getProductDetail(productId) {
    try {
        const respone = await api.get(`${PRODUCT_URL}/${productId}`)
        return respone.data.metadata
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}

export async function searchProduct(productName) {
    try {
        const respone = await api.get(`${PRODUCT_URL}/search/${productName}`)
        return respone.data.metadata
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}

export async function getProductById(id) {
    try {
        const response = await api.get(`${PRODUCT_URL}/${id}`);
        return response.data.metadata;
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}

export async function getProductByShopId(id) {
    try {
        const response = await api.get(`${PRODUCT_URL}/product_shop/${id}`);
        return response.data.metadata;
    } catch (error) {
        console.error("Error at getProductByShopId", error);
    }
}

export async function addProduct(
    { name, thumb, description, price, quantity, attribute },
    userId,
    accessToken
) {
    const type = "Clothes";
    try {
        const response = await api.post(
            `${PRODUCT_URL}`,
            {
                product_name: name,
                product_thumb: thumb,
                product_description: description,
                product_price: price,
                product_quantity: quantity,
                product_type: type,
                product_attributes: attribute,
            },
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "x-client-id": userId,
                    authorization: accessToken,
                },
            }
        );
        return response.data.metadata;
    } catch (error) {
        console.error(`Error at addProduct: `, error);
    }
}
