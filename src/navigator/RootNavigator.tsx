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
            <Stack.Screen name="registEmailAccountScreen" component={Screen.RegistEmailAccountScreen} />
            <Stack.Screen name="registEmailAuthScreen" component={Screen.RegistEmailAuthScreen} />
            <Stack.Screen name="registUserInformationScreen" component={Screen.RegistUserInformationScreen} />
            <Stack.Screen name="registSuccessScreen" component={Screen.RegistSuccessScreen} />
            <Stack.Screen name="findPasswordInputEmailScreen" component={Screen.FindPasswordInputEmailScreen} />
            <Stack.Screen name="findPasswordEmailAuthScreen" component={Screen.FindPasswordEmailAuthScreen} />
            <Stack.Screen name="findPasswordReplaceScreen" component={Screen.FindPasswordReplaceScreen} />
            <Stack.Screen name="findPasswordCompleteScreen" component={Screen.FindPasswordCompleteScreen} />
            <Stack.Screen name="manageHeddyBandScreen" component={Screen.ManageHeddyBandScreen} />
            <Stack.Screen name="historyCardWriteScreen" component={Screen.HistoryCardWriteScreen} />
            <Stack.Screen name="recordWriteScreen" component={Screen.RecordWriteScreen} />
            <Stack.Screen name="coachMarkScreen" component={Screen.CoachMarkScreen} />
            <Stack.Screen name="Root" component={BottomTabNavigator} />
        </Stack.Navigator>
    )
}

export default RootNavigator;