import React from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions, Text } from 'react-native';
import { PrimaryColorButton } from '../Atoms';
import { WithdrawalDogWide } from '../../assets/svgs/atoms';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

function ServiceWithdrawalThirdScreen({navigation}){
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.wideSvgContainer}>
                <WithdrawalDogWide width={deviceWidth} height={deviceWidth * (280 / 360)} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textContainerTitle}>다시 오실날을 기다릴게요!</Text>
                <Text style={styles.textContainerText}>
                    HEDDY의 회원탈퇴가 완료 되었어요.{'\n'}
                    다음에 다시 만날때는 더 나은 HEDDY가 되어있을게요.{'\n'}
                    그동안 HEDDY와 함께해줘서 감사했어요!
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <PrimaryColorButton text={'로그인 화면으로'} onPressHandler={() => navigation.popToTop('Login')} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    wideSvgContainer: {
        zIndex: 0,
        position: 'absolute',
        width: deviceWidth,
        top: 0,
        backgroundColor: '#ABC6FA',
        paddingTop: 54,
    },
    textContainer: {
        marginHorizontal: 32,
        marginTop: deviceWidth * (280 / 360) + 32,
    },
    textContainerTitle: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 24,
        fontWeight: '900',
        color: '#000000',
        lineHeight: 36,
        textAlign: 'center',
    },
    textContainerText: {
        marginTop: 16,
        fontFamily: 'NanumSquareRound',
        fontSize: 14,
        fontWeight: '400',
        color: '#4D4D4D',
        lineHeight: 21,
        textAlign: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 24,
        marginTop: 24,
        marginBottom: 40,
    },
    buttonWrapper: {
        flex: 1,
    },
})

export default ServiceWithdrawalThirdScreen;