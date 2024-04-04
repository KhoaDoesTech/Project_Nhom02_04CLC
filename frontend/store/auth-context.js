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

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [userInfo, setUserInfo] = useState({ email: '', username: '' });

    function authenticate(refreshToken, accessToken, username, email) {
        setAuthToken(accessToken);
        setRefreshToken(refreshToken);
        setUserInfo({ email: email, username: username })
        AsyncStorage.setItem('refreshToken', refreshToken);
        AsyncStorage.setItem('accessToken', accessToken);
    }

    function logout() {
        setAuthToken(null);
        setRefreshToken(null);
        setUserInfo({ email: null, username: null })
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
