import React, { useRef, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, NativeSyntheticEvent, TouchableOpacity, TextInputChangeEventData, Dimensions } from 'react-native';
import { PrimaryColorButton, StackPopHeaderTitle } from '../Atoms';

const deviceWidth = Dimensions.get('window').width;
function FindPasswordEmailAuthScreen({navigation}){
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
                    <StackPopHeaderTitle navigation={navigation} text={'비밀번호 재설정'} />
                </View>
                <View style={styles.titleContainer}>
                    <View>
                        <Text style={styles.primaryColorTitle}>인증번호를</Text>
                        <Text style={styles.defaultColorTitle}>입력해주세요</Text>
                        <Text style={styles.descriptionText}>heddy1234@heddy.co.kr로 인증번호를 전송했어요.</Text>
                        <Text style={styles.descriptionText}>받은 인증번호를 입력해주세요.</Text>
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
                            } else {
                                if(firstInputRef.current && secondInputRef.current){
                                    secondInputRef.current.clear()
                                    firstInputRef.current.focus()
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
                            } else {
                                if(firstInputRef.current && secondInputRef.current){
                                    secondInputRef.current.clear()
                                    firstInputRef.current.focus()
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
                            } else {
                                if(secondInputRef.current && thirdInputRef.current){
                                    thirdInputRef.current.clear()
                                    secondInputRef.current.focus()
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
                            } else {
                                if(thirdInputRef.current && forthInputRef.current){
                                    forthInputRef.current.clear()
                                    thirdInputRef.current.focus()
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
                            } else {
                                if(forthInputRef.current && fifthInputRef.current){
                                    fifthInputRef.current.clear()
                                    forthInputRef.current.focus()
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
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                            if(event.nativeEvent.text.length >= 1){
                                if(sixthInputRef.current){
                                    sixthInputRef.current.focus()
                                }
                            } else {
                                if(fifthInputRef.current && sixthInputRef.current){
                                    sixthInputRef.current.clear()
                                    fifthInputRef.current.focus()
                                }
                            }
                            setSixth(event.nativeEvent.text)
                        }}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryColorButton 
                        text='이메일 인증완료'
                        onPressHandler={() => navigation.reset({routes: [{name: "findPasswordReplaceScreen"}]})}
                    />
                </View>
            </ScrollView>
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>인증번호를 받지 못하셨나요?</Text>
                <TouchableOpacity>
                    <Text style={styles.footerTextBold}>인증번호 재전송</Text>
                </TouchableOpacity>
            </View>
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
        textAlign: 'center',
    },
    btnContainer:{
        marginTop: 16,
        marginHorizontal: 24,
    },
    timerBox:{
        position: 'absolute',
        right: 0,
        top: 0,
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
        fontWeight: '700',
        color: '#1a1a1a',
    },
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        width: deviceWidth,
        height: 96,
        backgroundColor: '#F4F4F4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontFamily: 'NanumSquareRound',
        fontSize: 12,
        fontWeight: '400',
        color: '#4D4D4D',
    },
    footerTextBold: {
        marginTop: 8,
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: '700',
        color: '#4D4D4D',
        textDecorationLine: 'underline',
    },
})

export default FindPasswordEmailAuthScreen;
