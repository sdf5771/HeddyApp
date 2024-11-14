import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import { DogGreeting } from '../../assets/svgs/RegistAgreeTermScreen';
import { PrimaryColorButton } from '../Atoms';

function RegistSuccessScreen({navigation}){

    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView>
                <View style={styles.greetingContainer}>
                    <View style={styles.greetingVisualContainer}>
                        <DogGreeting />
                    </View>
                    <View style={styles.greetingTextContainer}>
                        <Text style={styles.greetingTitleText}>회원가입이 <Text style={styles.greetingBolder}>완료</Text>되었어요!</Text>
                        <Text style={styles.greetingTermText}>내 친구와 함께하는 행복한 라이프를 시작해볼까요?</Text>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryColorButton 
                        text='HEDDY 시작하기!'
                        onPressHandler={() => navigation.reset({routes: [{name: "Login"}]})}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    rootScrollView: {
        
    },
    greetingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingVisualContainer:{
        marginTop: 106,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingTextContainer:{
        marginTop: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    greetingTitleText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 20,
        fontWeight: 700,
        color: '#000000',
    },
    greetingBolder: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 20,
        fontWeight: 700,
        color: '#1F5FFF',
    },
    greetingTermText:{
        fontFamily: 'NanumSquareRound',
        fontSize: 14,
        color: '#4D4D4D',
    },
    btnContainer:{
        marginTop: 296,
        marginHorizontal: 24,
        marginBottom: 19,
    }
})

export default RegistSuccessScreen;