import axios from "axios";
import Toast from 'react-native-toast-message';

const IP_ADD = "172.20.10.2";
const API_URL = `http://${IP_ADD}:3000`;

const api = axios.create({
    baseURL: API_URL
});

const showToast = (message) => {
    Toast.show({
        type: 'error',
        text1: `${message}`
    });
}

api.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        const errorMessage = error.response.data.message
        console.error(errorMessage)
        showToast(errorMessage)
        throw new Error(errorMessage)
    }
)

export default api;
