import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import Screen from '../components/Screen';
import { useAuth } from '../hooks';

const Stack = createNativeStackNavigator();

function RootNavigator(){
    const {isLoggedIn} = useAuth();

    return (
        <Stack.Navigator 
            initialRouteName="SplashScreen"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashScreen" component={Screen.SplashScreen} />
            {
                isLoggedIn ?
                null
                : <Stack.Screen name="Login" component={Screen.LoginScreen} />
            }
            <Stack.Screen name="onboard" component={Screen.SplashOnBoardScreen} />
            <Stack.Screen name="petListScreen" component={Screen.PetListScreen} />
            <Stack.Screen name="registPetScreen" component={Screen.RegistPetScreen} />
            <Stack.Screen name="healthReportDetailScreen" component={Screen.HealthReportDetailScreen} />
            <Stack.Screen name="registAgreeTermScreen" component={Screen.RegistAgreeTermScreen} />
            <Stack.Screen name="Root" component={BottomTabNavigator} />
        </Stack.Navigator>
    )
}

export default RootNavigator;