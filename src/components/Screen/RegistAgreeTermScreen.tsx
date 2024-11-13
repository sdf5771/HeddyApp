import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import { AgreeTermText, PrimaryColorButton, StackPopHeaderTitle } from '../Atoms';
import { useNavigation } from '@react-navigation/native';
import { DogGreeting } from '../../assets/svgs/RegistAgreeTermScreen';

function RegistAgreeTermScreen(){
    const navigation = useNavigation();
    const [allTerm, setAllTerm] = useState(false);
    const [serviceTerm, setServiceTerm] = useState(false);
    const [personalInformationTerm, setPersonalInformationTerm] = useState(false);
    const [marketingTerm, setMarketingTerm] = useState(false);

    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView style={styles.rootScrollView}>
                <View style={styles.headerContainer}>
                    <StackPopHeaderTitle navigation={navigation} text={'이메일 회원가입'} />
                </View>
                <View style={styles.greetingContainer}>
                    <View style={styles.greetingVisualContainer}>
                        <DogGreeting />
                    </View>
                    <View style={styles.greetingTextContainer}>
                        <Text style={styles.greetingTitleText}><Text style={styles.greetingBolder}>HEDDY</Text>에 오신것을 환영해요!</Text>
                        <Text style={styles.greetingTermText}>아래 약관에 동의 후 회원가입을 진행해주세요!</Text>
                    </View>
                </View>
                <View style={styles.agreeTermContainer}>
                    <AgreeTermText
                        text='전체 약관 동의'
                        isActive={allTerm}
                        onPressHandler={() => {
                            setAllTerm((prev) => {
                                setServiceTerm(!prev);
                                setPersonalInformationTerm(!prev);
                                setMarketingTerm(!prev);
                                return !prev;
                            });
                        }}
                        option={{
                            isDefaultTextBolder: true,
                        }}
                    />
                    <View style={styles.horizontalLine}></View>
                    <AgreeTermText
                        text='HEDDY 이용 약관에 동의'
                        isActive={serviceTerm}
                        onPressHandler={() => {
                            setServiceTerm((prev) => {
                                if(prev){
                                    setAllTerm(false);
                                }
                                return !prev
                            });
                        }}
                        option={{
                            renderRequirementText: true,
                        }}
                    />
                    <AgreeTermText
                        text='개인정보 처리방침'
                        isActive={personalInformationTerm}
                        onPressHandler={() => {
                            setPersonalInformationTerm((prev) => {
                                if(prev){
                                    setAllTerm(false);
                                }
                                return !prev
                            });
                        }}
                        option={{
                            renderRequirementText: true,
                        }}
                    />
                    <AgreeTermText
                        text='마케팅 정보 수신 및 선택적 개인정보 제공'
                        isActive={marketingTerm}
                        onPressHandler={() => {
                            setMarketingTerm((prev) => {
                                if(prev){
                                    setAllTerm(false);
                                }
                                return !prev
                            });
                        }}
                        option={{
                            renderOptionalText: true,
                        }}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryColorButton 
                        text='다음으로'
                        onPressHandler={() => {}}
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
    greetingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingVisualContainer:{
        marginTop: 58,
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
    agreeTermContainer:{
        marginTop: 136,
        marginHorizontal: 24,
        gap: 16,
    },
    horizontalLine: {
        height: 1,
        backgroundColor: '#E4E4E4',
    },
    btnContainer:{
        marginTop: 24,
        marginBottom: 16,
        marginHorizontal: 24,
    }
})

export default RegistAgreeTermScreen;