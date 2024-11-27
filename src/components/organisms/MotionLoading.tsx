import LottieView from 'lottie-react-native';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import LoadingLottieFile from '../../assets/lottie/loading.json';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

function MotionLoading(){
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.background} />
            <View style={styles.loadingContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.primaryColorText}>보여드릴 화면을 찾고있어요!</Text>
                    <Text style={styles.defaultColorText}>잠시만 기다려주세요!</Text>
                </View>
                <View style={styles.lottieWrapper}>
                    <LottieView 
                        autoPlay
                        loop={true}
                        source={LoadingLottieFile}
                        style={styles.lottieAnimation} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        zIndex: 97,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    background:{
        zIndex: 98,
        position: 'absolute',
        top: 0,
        left: 0,
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    loadingContainer: {
        zIndex: 99,
        position: 'absolute',
        top: (-180 - -deviceHeight) / 2,
        left: (-180 - -deviceWidth) / 2,
        transform: [
            { translateX: 0 }, 
            { translateY: 0 }, 
        ],
        width: 180,
        height: 180,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 26,
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
    },
    primaryColorText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 12,
        fontWeight: '700',
        color: '#1F5FFF',
        textAlign: 'center',
    },
    defaultColorText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 12,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
    },
    lottieWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 103,
        height: 91,
    },
    lottieAnimation: {
        width: 103,
        height: 91,
    },
});

export default MotionLoading;
