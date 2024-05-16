import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState } from 'react';

export const AuthContext = createContext({
    token: '',
    refreshToken: '',
    isAuthenticated: false,
    userInfo: {},
    authenticate: (accessToken) => { },
    logout: () => { }
});

async function setToken(name, value) {
    try {
        await AsyncStorage.setItem(name, value);
    } catch (error) {
    }
}


function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [userInfo, setUserInfo] = useState({ userId: '', email: '', username: '' });

    function authenticate({ refreshToken, accessToken, userId, username, email }) {
        setAuthToken(accessToken);
        setRefreshToken(refreshToken);
        setUserInfo({ userId, email, username })
        if (accessToken && refreshToken) {
            setToken('refreshToken', refreshToken);
            setToken('accessToken', accessToken);
        }
    }

    function logout() {
        setAuthToken(null);
        setRefreshToken(null);
        setUserInfo({ userId: null, email: null, username: null })

        AsyncStorage.removeItem('refreshToken');
        AsyncStorage.removeItem('accessToken');
    }

    const value = {
        token: authToken,
        refreshToken: refreshToken,
        isAuthenticated: !!authToken,
        userInfo: userInfo,
        authenticate: authenticate,
        logout: logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export default AuthContextProvider;
