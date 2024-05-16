import api from "../API";
import get from 'lodash/get'
const COMMENT_URL = '/v1/api/comment';

export async function getProductComment(size, productId, userId, accessToken) {
    try {
        const response = await api.get(`${COMMENT_URL}/?page=1&size=${size}&productId=${productId}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "x-client-id": userId,
                "authorization": accessToken,
            }
        });
        return response.data.metadata;
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}

export async function addComment({ productId, content, parentContentId }, userId, accessToken) {
    try {
        const response = await api.post(`${COMMENT_URL}`, { productId, content, parentContentId }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "x-client-id": userId,
                "authorization": accessToken,
            }
        });
        return response.data.metadata;
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}

