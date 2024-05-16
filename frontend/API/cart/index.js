import api from '../API'
import get from 'lodash/get'
const CART_URL = "/v1/api/cart"

export async function addToCart(data, userId, accessToken) {
    try {
        const response = await api.post(`${CART_URL}`, data, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "x-client-id": userId,
                "authorization": accessToken,
            }
        });
        return response.data.metadata;
    } catch (error) {
        console.error(error);
        const errorMessage = get(error, 'response.data.error.message', '') || JSON.stringify(error); // Sử dụng 'response.data.error.message' thay vì 'data.error.message'
        throw new Error(errorMessage);
    }
}

export async function getListCart(userId, accessToken) {
    try {
        const response = await api.get(`${CART_URL}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "x-client-id": userId,
                "authorization": accessToken,
            }
        })
        return response.data.metadata.cart_products
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}

export async function deleteCart(productId) {
    try {
        await api.delete(`${CART_URL}`, productId, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "x-client-id": userId,
                "authorization": accessToken,
            }
        })
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}
