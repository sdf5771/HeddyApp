import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import Screen from '../components/Screen';
import { useAuth } from '../hooks';

const Stack = createNativeStackNavigator();

function RootNavigator(){
    const {isLoggedIn} = useAuth();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {
                isLoggedIn ?
                null
                : <Stack.Screen name="Login" component={Screen.LoginScreen} />
            }
            <Stack.Screen name="Root" component={BottomTabNavigator} />
        </Stack.Navigator>
    )
}

export default RootNavigator;