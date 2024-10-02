import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from 'react-native';
import SplashLottieFile from '../../assets/lottie/heddy-splash-screen.json';
import { SplashHeddy } from '../../assets/svgs/SplashScreen';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

function SplashScreen({navigation}){
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 3000)
    }, [])
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.titleContainer}>
                <SplashHeddy width={256} height={54} />
                <Text style={styles.titleText}>내 친구와 함께하는 행복한 라이프</Text>
            </View>
            <LottieView 
                autoPlay
                loop={true}
                source={SplashLottieFile}
                style={{width: deviceWidth, height: deviceHeight}} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: '#5f93ff',
    },
    titleContainer: {
        position: 'absolute',
        top: 144,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    titleText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        color: '#ffffff',
    },
})

export default SplashScreen;