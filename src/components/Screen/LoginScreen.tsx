import React, { useEffect, useState } from 'react';
import { NativeSyntheticEvent, Pressable, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData, TextInputComponent, View } from 'react-native';
import HeddyLogo from '../../assets/svgs/LoginScreen/HeddyLogo.svg';
import EmailLogo from '../../assets/svgs/LoginScreen/email.svg';
import PasswordLogo from '../../assets/svgs/LoginScreen/password.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen({navigation}){
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const checkRenderOnBoard = async () => {
        const isFirstTime = await AsyncStorage.getItem('startedBefore');
        if(!isFirstTime){
            navigation.push('onboard');
        }
    }

    useEffect(() => {
        checkRenderOnBoard();
    }, [])

    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView>
                <View style={styles.screenHeaderContainer}>
                    <HeddyLogo width={82} height={18} />
                    <Text style={styles.titleText}>
                        내 친구와 함께하는 {"\n"}
                        행복한 라이프를 {"\n"}
                        시작해볼까요?
                    </Text>
                </View>
                <View style={styles.loginContainer}>
                    <Text style={styles.loginContainerTitleText}>로그인</Text>
                    
                    <View>
                        <View style={styles.textInputWrapper}>
                            <EmailLogo style={{marginTop: 17}} width={24} height={24} />
                            <TextInput style={styles.textInput} onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                                setEmailValue(event.nativeEvent.text)
                            }} placeholder="이메일" value={emailValue} placeholderTextColor="#808080" />
                        </View>
                        <View style={styles.textInputWrapper}>
                            <PasswordLogo style={{marginTop: 17}} width={24} height={24} />
                            <TextInput style={styles.textInput} onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                                setPasswordValue(event.nativeEvent.text)
                            }} placeholder="영문, 숫자, 특수문자 포함 4~20자" value={passwordValue} placeholderTextColor="#808080" />
                        </View>
                        <TouchableOpacity onPress={() => navigation.replace('Root')}>
                            <View style={styles.loginPressable}>
                                    <Text style={styles.loginText}>로그인 하기</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.SNSContainer}>
                    <View style={styles.dumpView}></View>
                    <View style={styles.dumpView}></View>
                    <View style={styles.dumpView}></View>
                    <View style={styles.dumpView}></View>
                </View>
                <View style={styles.registContainer}>
                    <TouchableOpacity onPress={() => navigation.push('EmailInput')}>
                        <Text style={styles.pressText}>아이디 찾기</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>
                    <TouchableOpacity onPress={() => navigation.push('EmailInput')}>
                        <Text style={styles.pressText}>비밀번호 찾기</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>
                    <TouchableOpacity onPress={() => navigation.push('EmailInput')}>
                        <Text style={styles.pressText}>이메일 가입</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    screenHeaderContainer: {
        paddingHorizontal: 24,
        marginTop: 42,
    },
    titleText: {
        fontFamily: 'NanumSquareRoundEB',
        marginTop: 16,
        fontSize: 24,
        lineHeight: 34,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
    loginContainer: {
        paddingHorizontal: 24,
        marginTop: 48,
    },
    loginContainerTitleText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 20,
        color: '#000000',
    },
    textInputWrapper: {
        marginTop: 16,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#F4F4F4',
        height: 56,
        gap: 8,
    },
    textInput: {
        flex: 1,
        fontWeight: 'bold',
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
    },
    loginPressable:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        borderRadius: 16,
        height: 48,
        backgroundColor: '#1F5FFF',
    },
    loginText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    SNSContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 48,
        paddingHorizontal: 24,
        gap: 16,
    },
    dumpView: {
        width: 48,
        height: 48,
        borderRadius: 50,
        backgroundColor: '#e4e4e4',
    },
    registContainer: {
        marginTop: 48,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    pressText:{
        fontFamily: 'NanumSquareRoundB',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#808080',
    },
    line: {
        width: 1,
        height: 16,
        backgroundColor: '#e4e4e4',
    }
})

export default LoginScreen;