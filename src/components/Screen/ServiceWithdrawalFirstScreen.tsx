import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { StackPopHeaderTitle, PrimaryColorButton, DefaultColorButton } from '../Atoms';

function ServiceWithdrawalFirstScreen({navigation}){
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.headerContainer}>
                <StackPopHeaderTitle navigation={navigation} text={'탈퇴하기'} />
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/ServiceWithdrawal/withdrawal_logo.png')} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textContainerTitle}>떠나신다니 아쉬워요..</Text>
                <Text style={styles.textContainerText}>탈퇴하시면 더 이상 HEDDY의 서비스를 이용할 수 없으며 계정과 관련된 모든 데이터가 삭제되요.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <DefaultColorButton text={'탈퇴할래요.'} onPressHandler={() => navigation.push('serviceWithdrawalSecondScreen')} />
                </View>
                <View style={styles.buttonWrapper}>
                    <PrimaryColorButton text={'조금 더 고민할게요!'} onPressHandler={() => navigation.pop()} />
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
    headerContainer: {
        marginTop: 24,
        marginHorizontal: 24,
    },
    imageContainer: {
        marginTop: 52,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginTop: 24,
        marginHorizontal: 24,
    },
    textContainerTitle: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 24,
        fontWeight: '900',
        color: '#000000',
        textAlign: 'center',
    },
    textContainerText: {
        marginTop: 8,
        fontFamily: 'NanumSquareRound',
        fontSize: 14,
        fontWeight: '400',
        color: '#4D4D4D',
        textAlign: 'center',
        lineHeight: 21,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 24,
        marginTop: 24,
        marginBottom: 40,
        gap: 8,
    },
    buttonWrapper: {
        flex: 1,
    },
})

export default ServiceWithdrawalFirstScreen;