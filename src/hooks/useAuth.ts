import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

const REFRESH_TOKEN_KEY = 'heddy-refreshToken';
const ACCESS_TOKEN_KEY = 'heddy-accessToken';

function useAuth(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginCheck = async () => {
        const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);

        if (refreshToken){
            setIsLoggedIn(true);
        }
    }

    const setAccessToken = async (token: string) => {
        await AsyncStorage.setItem(ACCESS_TOKEN_KEY, token);
    }

    useEffect(() => {
        loginCheck();
    }, [AsyncStorage.getItem(REFRESH_TOKEN_KEY)])

    return {
        isLoggedIn,
        setAccessToken,
    }
}

export default useAuth;