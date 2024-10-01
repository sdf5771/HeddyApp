import React, { useState } from 'react';
import { NativeSyntheticEvent, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData, TextInputComponent, View } from 'react-native';
import HeddyLogo from '../../assets/svgs/LoginScreen/HeddyLogo.svg';
import EmailLogo from '../../assets/svgs/LoginScreen/email.svg';
import PasswordLogo from '../../assets/svgs/LoginScreen/password.svg';

function LoginScreen({navigation}){
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

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
                    <Text>로그인</Text>
                    
                    <View>
                        <View style={styles.textInputWrapper}>
                            <EmailLogo width={24} height={24} />
                            <TextInput style={styles.textInput} onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                                setEmailValue(event.nativeEvent.text)
                            }} placeholder='이메일' value={emailValue} />
                        </View>
                        <View style={styles.textInputWrapper}>
                            <PasswordLogo width={24} height={24} />
                            <TextInput style={styles.textInput} onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                                setPasswordValue(event.nativeEvent.text)
                            }} placeholder='영문, 숫자, 특수문자 포함 4~20자' value={passwordValue} />
                        </View>
                        <View style={styles.loginPressable}>
                            <Pressable onPress={() => navigation.push('EmailInput')}>
                                <Text style={styles.loginText}>로그인 하기</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={styles.SNSContainer}>
                    <View style={styles.dumpView}></View>
                    <View style={styles.dumpView}></View>
                    <View style={styles.dumpView}></View>
                    <View style={styles.dumpView}></View>
                </View>
                <View style={styles.registContainer}>
                    <Pressable onPress={() => navigation.push('EmailInput')}>
                        <Text style={styles.pressText}>아이디 찾기</Text>
                    </Pressable>
                    <View style={styles.line}></View>
                    <Pressable onPress={() => navigation.push('EmailInput')}>
                        <Text style={styles.pressText}>비밀번호 찾기</Text>
                    </Pressable>
                    <View style={styles.line}></View>
                    <Pressable onPress={() => navigation.push('EmailInput')}>
                        <Text style={styles.pressText}>이메일 가입</Text>
                    </Pressable>
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
        marginTop: 16,
        fontSize: 24,
        lineHeight: 40,
        fontWeight: 'bold',
    },
    loginContainer: {
        paddingHorizontal: 24,
        marginTop: 48,
    },
    textInputWrapper: {
        marginTop: 16,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 17,
        backgroundColor: '#F4F4F4',
        height: 56,
        gap: 8,
    },
    textInput: {
        flex: 1,
        fontWeight: 'bold',
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