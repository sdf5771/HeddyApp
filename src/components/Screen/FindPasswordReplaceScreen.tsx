import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TextInputChangeEventData, NativeSyntheticEvent } from 'react-native';
import { PrimaryColorButton, StackPopHeaderTitle } from '../Atoms';
import { TitleErrorInputBox } from '../Molecules';

function FindPasswordReplaceScreen({navigation}){
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <StackPopHeaderTitle navigation={navigation} text={'비밀번호 재설정'} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.primaryColorTitle}>재설정 할 비밀번호를</Text>
                    <Text style={styles.defaultColorTitle}>입력해주세요</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TitleErrorInputBox 
                        title="비밀번호" 
                        placeholder='영문/숫자/특수문자 10자 이상' 
                        value={password}
                        setInputValue={setPassword} 
                        errorMsg='영문/숫자/특수문자 10자 이상 입력이 가능해요' 
                        isError={false} 
                        inputMode='text' 
                        isRequired={true}
                        secureTextEntry={true} />
                </View>
                <View style={styles.inputContainer}>
                    <TitleErrorInputBox 
                        title="비밀번호 확인" 
                        placeholder='영문/숫자/특수문자 10자 이상' 
                        value={passwordVerify}
                        setInputValue={setPasswordVerify} 
                        errorMsg='영문/숫자/특수문자 10자 이상 입력이 가능해요' 
                        isError={false} 
                        inputMode='text' 
                        isRequired={true}
                        secureTextEntry={true} />
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryColorButton 
                        text='비밀번호 변경'
                        onPressHandler={() => navigation.reset({routes: [{name: "findPasswordCompleteScreen"}]})}
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
        marginTop: 16,
        marginHorizontal: 24,
    },
})

export default FindPasswordReplaceScreen;