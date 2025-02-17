import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TextInputChangeEventData, NativeSyntheticEvent, TouchableOpacity } from 'react-native';
import { PrimaryColorButton, StackPopHeaderTitle, DefaultColorButton } from '../Atoms';
import { TitleErrorInputBox } from '../Molecules';
import { UserAvatarEmptyPlus } from '../../assets/svgs/atoms';
function ModifyUserInformationScreen({navigation}){
    const [email, setEmail] = useState(''); 
    const [nickname, setNickname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthday, setBirthday] = useState('');
    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <StackPopHeaderTitle navigation={navigation} text={'사용자 프로필 편집하기'} />
                </View>
                <View style={styles.userAvartarContainer}>
                    <TouchableOpacity>
                        <UserAvatarEmptyPlus />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TitleErrorInputBox 
                        title="이메일" 
                        placeholder='heddy1234@heddy.co.kr' 
                        value={email} 
                        setInputValue={setEmail} 
                        errorMsg='한글, 영문, 숫자 8자 이내만 입력이 가능해요' 
                        isError={true} 
                        isRequired={true}
                        inputMode='email' />
                    <TitleErrorInputBox 
                        title="닉네임" 
                        placeholder='한글 2자 / 영문 4자 이상' 
                        value={nickname}
                        setInputValue={setNickname} 
                        errorMsg='한글, 영문, 숫자 8자 이내만 입력이 가능해요' 
                        isError={true} 
                        isRequired={true}
                        inputMode='text' 
                        secureTextEntry={true} />
                    <TitleErrorInputBox 
                        title="연락처" 
                        placeholder='010-XXXX-XXXX' 
                        value={phoneNumber}
                        setInputValue={setPhoneNumber} 
                        errorMsg='한글, 영문, 숫자 8자 이내만 입력이 가능해요' 
                        isError={true} 
                        isRequired={true}
                        inputMode='text' 
                        secureTextEntry={true} />
                    <TitleErrorInputBox 
                        title="생년월일" 
                        placeholder='YYYY/MM/DD' 
                        value={birthday}
                        setInputValue={setBirthday} 
                        errorMsg='한글, 영문, 숫자 8자 이내만 입력이 가능해요' 
                        isError={true} 
                        isRequired={true}
                        inputMode='text' 
                        secureTextEntry={true} />
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryColorButton 
                        text='완료하기'
                        onPressHandler={() => navigation.pop()}
                    />
                    <TouchableOpacity>
                        <View style={styles.passwordResetButton}>
                            <Text style={styles.passwordResetButtonText}>비밀번호 재설정</Text>
                        </View>
                    </TouchableOpacity>
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
    userAvartarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 24,
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
    passwordResetButton:{
        marginTop: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 48,
    },
    passwordResetButtonText:{
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 12,
        fontWeight: '900',
        color: '#808080',
    }
})

export default ModifyUserInformationScreen;