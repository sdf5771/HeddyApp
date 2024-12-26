import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import { PrimaryColorButton } from '../Atoms';
import { PasswordLogo } from '../../assets/svgs/atoms';

function FindPasswordCompleteScreen({navigation}){
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.logoContainer}>
                <PasswordLogo />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.primaryColorTitle}>비밀번호가 재설정 </Text>
                <Text style={styles.defaultColorTitle}>되었어요!</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>보안을 위해 재설정된 비밀번호로 다시 로그인 해주세요.</Text>
            </View>
            <View style={styles.btnContainer}>
                <PrimaryColorButton 
                    text='로그인 화면으로'
                    onPressHandler={() => navigation.reset({routes: [{name: "Login"}]})}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    logoContainer: {
        marginTop: 158,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginTop: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    primaryColorTitle: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 24,
        fontWeight: '700',
        color: '#1F5FFF',
    },
    defaultColorTitle: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
    },
    descriptionContainer: {
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionText: {
        fontFamily: 'NanumSquareRoundR',
        fontSize: 14,
        fontWeight: '400',
        color: '#4D4D4D',
    },
    btnContainer: {
        position: 'absolute',
        bottom: 16,
        width: '100%',
        display: 'flex',
        paddingHorizontal: 24,
    },
})

export default FindPasswordCompleteScreen;
