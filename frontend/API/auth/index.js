import api from '../API';
import get from 'lodash/get'
import Toast from 'react-native-toast-message';

const AUTH_URL = '/v1/api/auth';


export async function auth({ mode, email, password }) {
    try {
        const response = await api.post(`${AUTH_URL}/${mode}`, { email, password });
        return response.data.metadata;
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}

export async function verifyAccount({ email, otpCode }) {
    try {
        console.info('log at at verifyAccount', email, otpCode);
        const respone = await api.post(`${AUTH_URL}/verify-email`, { email: email, otp: otpCode });
        return respone.data.metadata;
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}

export async function resetPassword({ email }) {
    try {
        const response = await api.post(`${AUTH_URL}/reset-password`, { email });
        return response.data.metadata;
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}

export async function resendOtp({ email }) {
    try {
        const response = await api.post(`${AUTH_URL}/resend-otp`, { email });
        return response.data.metadata;
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}

