import React, { useRef, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { PrimaryColorButton, StackPopHeaderTitle } from '../Atoms';

function RegistEmailAuthtScreen({navigation}){
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
    const [forth, setForth] = useState('');
    const [fifth, setFifth] = useState('');
    const [sixth, setSixth] = useState('');

    const firstInputRef = useRef<TextInput | null>(null);
    const secondInputRef = useRef<TextInput | null>(null);
    const thirdInputRef = useRef<TextInput | null>(null);
    const forthInputRef = useRef<TextInput | null>(null);
    const fifthInputRef = useRef<TextInput | null>(null);
    const sixthInputRef = useRef<TextInput | null>(null);
    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <StackPopHeaderTitle navigation={navigation} text={'이메일 회원가입'} />
                </View>
                <View style={styles.titleContainer}>
                    <View>
                        <Text style={styles.primaryColorTitle}>이메일을</Text>
                        <Text style={styles.defaultColorTitle}>입력해주세요</Text>
                        <Text style={styles.descriptionText}>입력하신 메일주소로 인증번호가 발송되요.</Text>
                    </View>
                    <View style={styles.timerBox}>
                        <Text style={styles.timerText}>03:00</Text>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        ref={firstInputRef}
                        style={styles.textInput}
                        value={first}
                        placeholder='0'
                        inputMode='numeric'
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                            if(event.nativeEvent.text.length >= 1){
                                if(secondInputRef.current){
                                    secondInputRef.current.focus()
                                }
                            }
                            setFirst(event.nativeEvent.text)
                        }}
                    />
                    <TextInput 
                        ref={secondInputRef}
                        style={styles.textInput}
                        value={second}
                        placeholder='0'
                        inputMode='numeric'
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                            if(event.nativeEvent.text.length >= 1){
                                if(thirdInputRef.current){
                                    thirdInputRef.current.focus()
                                }
                            }
                            setSecond(event.nativeEvent.text)
                        }}
                    />
                    <TextInput 
                        ref={thirdInputRef}
                        style={styles.textInput}
                        value={third}
                        placeholder='0'
                        inputMode='numeric'
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                            if(event.nativeEvent.text.length >= 1){
                                if(forthInputRef.current){
                                    forthInputRef.current.focus()
                                }
                            }
                            setThird(event.nativeEvent.text)
                        }}
                    />
                    <TextInput 
                        ref={forthInputRef}
                        style={styles.textInput}
                        value={forth}
                        placeholder='0'
                        inputMode='numeric'
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                            if(event.nativeEvent.text.length >= 1){
                                if(fifthInputRef.current){
                                    fifthInputRef.current.focus()
                                }
                            }
                            setForth(event.nativeEvent.text)
                        }}
                    />
                    <TextInput 
                        ref={fifthInputRef}
                        style={styles.textInput}
                        value={fifth}
                        placeholder='0'
                        inputMode='numeric'
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                            if(event.nativeEvent.text.length >= 1){
                                if(sixthInputRef.current){
                                    sixthInputRef.current.focus()
                                }
                            }
                            setFifth(event.nativeEvent.text)
                        }}
                    />
                    <TextInput 
                        ref={sixthInputRef}
                        style={styles.textInput}
                        value={sixth}
                        placeholder='0'
                        inputMode='numeric'
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => setSixth(event.nativeEvent.text)}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryColorButton 
                        text='이메일 인증완료'
                        onPressHandler={() => navigation.reset({routes: [{name: "registUserInformationScreen"}]})}
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
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
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
    timerBox:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F4F4',
        paddingHorizontal: 16,
        paddingVertical: 8,
        height: 37,
        borderRadius: 16,
    },
    timerText:{
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        fontWeight: 700,
        color: '#1a1a1a',
    }
})

export default RegistEmailAuthtScreen;