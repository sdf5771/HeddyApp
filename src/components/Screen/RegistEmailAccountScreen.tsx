import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TextInputChangeEventData, NativeSyntheticEvent } from 'react-native';
import { PrimaryColorButton, StackPopHeaderTitle } from '../Atoms';

function RegistEmailAccountScreen({navigation}){
    const [email, setEmail] = useState('');
    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <StackPopHeaderTitle navigation={navigation} text={'이메일 회원가입'} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.primaryColorTitle}>이메일을</Text>
                    <Text style={styles.defaultColorTitle}>입력해주세요</Text>
                    <Text style={styles.descriptionText}>입력하신 메일주소로 인증번호가 발송되요.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.textInput}
                        value={email}
                        placeholder='heddy1234@heddy.co.kr'
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => setEmail(event.nativeEvent.text)}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryColorButton 
                        text='인증번호 전송하기'
                        onPressHandler={() => navigation.push('registEmailAuthScreen')}
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
        fontWeight: 700,
        color: '#1F5FFF',
    },
    defaultColorTitle:{
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 24,
        fontWeight: 700,
        color: '#000000',
    },
    descriptionText: {
        marginTop: 8,
        fontFamily: 'NanumSquareRound',
        fontSize: 14,
        fontWeight: 400,
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

export default RegistEmailAccountScreen;