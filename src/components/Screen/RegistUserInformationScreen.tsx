import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TextInputChangeEventData, NativeSyntheticEvent } from 'react-native';
import { PrimaryColorButton, StackPopHeaderTitle } from '../Atoms';
import { TitleErrorInputBox } from '../Molecules';

function RegistUserInformationScreen({navigation}){
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [nickname, setNickname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthday, setBirthday] = useState('');
    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <StackPopHeaderTitle navigation={navigation} text={'이메일 회원가입'} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.primaryColorTitle}>추가정보를</Text>
                    <Text style={styles.defaultColorTitle}>입력해주세요.</Text>
                    <Text style={styles.descriptionText}>헤디가 여러분을 더 알고싶어요. 마지막 단계입니다!</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TitleErrorInputBox 
                        title="이메일" 
                        placeholder='heddy1234@heddy.co.kr' 
                        value={email} 
                        setInputValue={setEmail} 
                        errorMsg='한글, 영문, 숫자 8자 이내만 입력이 가능해요' 
                        isError={true} 
                        inputMode='email' />
                    <TitleErrorInputBox 
                        title="비밀번호" 
                        placeholder='영문/숫자/특수문자 10자 이상' 
                        value={password}
                        setInputValue={setPassword} 
                        errorMsg='한글, 영문, 숫자 8자 이내만 입력이 가능해요' 
                        isError={true} 
                        inputMode='text' 
                        secureTextEntry={true} />
                    <TitleErrorInputBox 
                        title="비밀번호 확인" 
                        placeholder='영문/숫자/특수문자 10자 이상' 
                        value={passwordConfirm}
                        setInputValue={setPasswordConfirm} 
                        errorMsg='한글, 영문, 숫자 8자 이내만 입력이 가능해요' 
                        isError={true} 
                        inputMode='text' 
                        secureTextEntry={true} />
                    <TitleErrorInputBox 
                        title="닉네임" 
                        placeholder='한글 2자 / 영문 4자 이상' 
                        value={nickname}
                        setInputValue={setNickname} 
                        errorMsg='한글, 영문, 숫자 8자 이내만 입력이 가능해요' 
                        isError={true} 
                        inputMode='text' 
                        secureTextEntry={true} />
                    <TitleErrorInputBox 
                        title="연락처" 
                        placeholder='010-XXXX-XXXX' 
                        value={phoneNumber}
                        setInputValue={setPhoneNumber} 
                        errorMsg='한글, 영문, 숫자 8자 이내만 입력이 가능해요' 
                        isError={true} 
                        inputMode='text' 
                        secureTextEntry={true} />
                    <TitleErrorInputBox 
                        title="생년월일" 
                        placeholder='YYYY/MM/DD' 
                        value={birthday}
                        setInputValue={setBirthday} 
                        errorMsg='한글, 영문, 숫자 8자 이내만 입력이 가능해요' 
                        isError={true} 
                        inputMode='text' 
                        secureTextEntry={true} />
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryColorButton 
                        text='회원가입 완료하기'
                        onPressHandler={() => navigation.push('registSuccessScreen')}
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
    headerContainer: {
        marginTop: 24,
        marginHorizontal: 24,
    },
    titleContainer: {
        marginTop: 34,
        display: 'flex',
        marginHorizontal: 24,
    },
    primaryColorTitle:{
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 24,
        fontWeight: '700',
        color: '#1F5FFF',
    },
    defaultColorTitle:{
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
    },
    descriptionText: {
        marginTop: 8,
        fontFamily: 'NanumSquareRound',
        fontSize: 14,
        fontWeight: '400',
        color: '#808080',
    },
    inputContainer:{
        marginTop: 24,
        marginHorizontal: 24,
        display: 'flex',
        gap: 24,
    },
    textInput:{
        borderRadius: 16,
        height: 54,
        padding: 16,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#E4E4E4',
    },
    btnContainer:{
        marginTop: 24,
        marginBottom: 79,
        marginHorizontal: 24,
    },
})

export default RegistUserInformationScreen;