import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StackPopHeaderTitle } from '../Atoms';
import PetImgLogo from '../../assets/svgs/RegistPetScreen/registPetImgLogo.svg';
import SearchLogo from '../../assets/svgs/RegistPetScreen/search.svg';
import DatePickLogo from '../../assets/svgs/RegistPetScreen/date_pick.svg';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

function RegistPetScreen({navigation}){

    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView style={styles.rootScrollView}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity>
                        <StackPopHeaderTitle navigation={navigation} text={'새 친구 등록하기'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.petImgContainer}>
                    <PetImgLogo width={108} height={108} />
                </View>
                <View style={styles.inputContainer}>

                    <View>
                        <View style={styles.helpTextWrapper}>
                            <View style={styles.requireTextWrapper}>
                                <Text style={styles.titleText}>이름 </Text>
                                <Text style={styles.requirementsText}>*</Text>
                            </View>
                            <Text style={styles.helpText}>한글, 영문, 숫자 8자 이내 입력</Text>
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput style={styles.textInput} placeholder='친구의 이름은 무엇인가요?'/>
                        </View>
                    </View>

                    <View>
                        <View style={styles.helpTextWrapper}>
                            <View style={styles.requireTextWrapper}>
                                <Text style={styles.titleText}>성별 </Text>
                                <Text style={styles.requirementsText}>*</Text>
                            </View>
                        </View>
                        <View style={styles.toggleContainer}>
                            <TouchableOpacity>
                                <View style={[styles.toggleElement, {marginTop: 8, width: deviceWidth / 2 - 24 - 8}]}>
                                    <Text style={styles.toggleText}>수컷</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[styles.toggleElement, {marginTop: 8, width: deviceWidth / 2 - 24 - 8}]}>
                                    <Text style={styles.toggleText}>암컷</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <View style={styles.helpTextWrapper}>
                            <View style={styles.requireTextWrapper}>
                                <Text style={styles.titleText}>종류 </Text>
                                <Text style={styles.requirementsText}>*</Text>
                            </View>
                        </View>
                        <View style={styles.toggleContainer}>
                            <TouchableOpacity>
                                <View style={[styles.toggleElement, {marginTop: 8, width: deviceWidth / 3 - 24}]}>
                                    <Text style={styles.toggleText}>강아지</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[styles.toggleElement, {marginTop: 8, width: deviceWidth / 3 - 24}]}>
                                    <Text style={styles.toggleText}>고양이</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[styles.toggleElement, {marginTop: 8, width: deviceWidth / 3 - 24}]}>
                                    <Text style={styles.toggleText}>기타</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', gap: 16,}}>
                        <View style={{width: deviceWidth / 2 - 24 - 8}}>
                            <View style={styles.helpTextWrapper}>
                                <View style={styles.requireTextWrapper}>
                                    <Text style={styles.titleText}>나이 </Text>
                                    <Text style={styles.requirementsText}>*</Text>
                                </View>
                            </View>
                            <View style={[styles.textInputContainer, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
                                <TextInput style={styles.textInput} placeholder='00'/>
                                <Text style={{
                                    fontFamily: 'NanumSquareRoundEB',
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    color: '#1F5FFF',
                                }}>살</Text>
                            </View>
                        </View>
                        <View style={{width: deviceWidth / 2 - 24 - 8}}>
                            <View style={styles.helpTextWrapper}>
                                <View style={styles.requireTextWrapper}>
                                    <Text style={styles.titleText}>몸무게 </Text>
                                    <Text style={styles.requirementsText}>*</Text>
                                </View>
                            </View>
                            <View style={[styles.textInputContainer, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
                                <TextInput style={styles.textInput} placeholder='00'/>
                                <Text style={{
                                    fontFamily: 'NanumSquareRoundEB',
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    color: '#1F5FFF',
                                }}>kg</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={styles.helpTextWrapper}>
                            <View style={styles.requireTextWrapper}>
                                <Text style={styles.titleText}>품종 </Text>
                            </View>
                        </View>
                        <View style={[styles.textInputContainer, {flexDirection: 'row', alignItems: 'center', gap: 4}]}>
                            <SearchLogo width={24} height={24} />
                            <TextInput inputMode='search' style={styles.textInput} placeholder='친구의 품종을 검색해주세요!'/>
                        </View>
                    </View>

                    <View>
                    <View style={styles.requireTextWrapper}>
                                <Text style={styles.titleText}>생일 </Text>
                            </View>
                        <View style={styles.dateContainer}>
                            <TouchableOpacity>
                                <View style={[styles.dateElement, {marginTop: 8, width: deviceWidth / 3 - 24}]}>
                                    <Text style={styles.dateText}>연도</Text>
                                    <DatePickLogo width={8} height={6} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[styles.dateElement, {marginTop: 8, width: deviceWidth / 3 - 24}]}>
                                    <Text style={styles.dateText}>월</Text>
                                    <DatePickLogo width={8} height={6} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[styles.dateElement, {marginTop: 8, width: deviceWidth / 3 - 24}]}>
                                    <Text style={styles.dateText}>일</Text>
                                    <DatePickLogo width={8} height={6} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginTop: 24}}>
                        <TouchableOpacity onPress={() => navigation.pop()}>
                            <View style={styles.registBtn}>
                                <Text style={styles.registBtnText}>입력 완료!</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
        paddingHorizontal: 24,
    },
    headerContainer: {
        marginTop: 24,
    },
    petImgContainer: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        marginTop: 40,
        gap: 24,
    },
    helpTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    requirementsText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: 'bold',
        color: "#1F5FFF",
    },
    requireTextWrapper:{
        flexDirection: 'row',
    },
    helpText: {
        fontFamily: 'NanumSquareRoundB',
        fontSize: 10,
        fontWeight: 'bold',
        color: '#808080',
    },
    textInputContainer: {
        marginTop: 8,
        padding: 16,
        borderRadius: 16,
        backgroundColor: '#F4F4F4',
    },
    textInput: {
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        fontWeight: 'bold',
    },

    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    toggleElement: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        borderRadius: 16,
        backgroundColor: '#F4F4F4',
    },
    toggleText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#B3B3B3',
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    dateElement: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 48,
        borderRadius: 16,
        paddingHorizontal: 16,
        backgroundColor: '#F4F4F4',
    },
    dateText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D4D4D',
    },
    registBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        borderRadius: 16,
        backgroundColor: '#1F5FFF',
        marginBottom: 118,
    },
    registBtnText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
    },
})

export default RegistPetScreen;