import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput } from 'react-native';
import { StackPopHeaderTitle, DefaultColorButton, PrimaryColorButton, AgreeTermText } from '../Atoms';

function ServiceWithdrawalSecondScreen({navigation}){
    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <StackPopHeaderTitle navigation={navigation} text={'탈퇴하기'} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textContainerTitle}>더 나은 HEDDY가{'\n'}되고 싶어요.</Text>
                    <Text style={styles.textContainerText}>우리가 다시 만났을 때{'\n'}더 나은 HEDDY가 될 수 있게 도와주세요!</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputContainerTextWrapper}>
                        <Text style={styles.inputContainerTitle}><Text style={styles.inputContainerTitleBold}>[필수]</Text> 탈퇴하시는 이유가 무엇인가요?</Text>
                        <Text style={styles.inputContainerText}>중복선택이 가능해요.</Text>
                    </View>
                    <View style={styles.inputContainerWrapper}>
                        <AgreeTermText
                            text='이용가능한 서비스가 적어요.'
                            isActive={false}
                            onPressHandler={() => {
                                
                            }}
                            option={{
                                hideArrow: true,
                            }}
                        />
                        <AgreeTermText
                            text='서비스의 질이 기대에 못미쳐요.'
                            isActive={false}
                            onPressHandler={() => {
                                
                            }}
                            option={{
                                hideArrow: true,
                            }}
                        />
                        <AgreeTermText
                            text='원하는 기능이 없어요.'
                            isActive={false}
                            onPressHandler={() => {
                                
                            }}
                            option={{
                                hideArrow: true,
                            }}
                        />
                        <AgreeTermText
                            text='어플리케이션의 기능적 오류, 장애가 심각해요.'
                            isActive={false}
                            onPressHandler={() => {
                                
                            }}
                            option={{
                                hideArrow: true,
                            }}
                        />
                        <AgreeTermText
                            text='기타 (직접입력)'
                            isActive={false}
                            onPressHandler={() => {
                                
                            }}
                            option={{
                                hideArrow: true,
                            }}
                        />
                    </View>
                    <View style={styles.textAreaContainer}>
                        <TextInput
                            style={styles.textArea}
                            placeholder='HEDDY를 탈퇴하려는 이유를 작성해주세요.'
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                </View>
                <View style={styles.noticeContainer}>
                    <View style={styles.noticeTitleWrapper}>
                        <Text style={styles.noticeTitle}>유의사항을 꼭 확인해주세요.</Text>
                    </View>
                    <View style={styles.noticeTextWrapper}>
                        <View style={styles.noticeTextRow}>
                            <Text style={styles.noticeBullet}>•</Text>
                            <Text style={styles.noticeText}>진행 중인 주문 또는 멤버십이 있는 경우, 탈퇴가 불가합니다.</Text>
                        </View>
                        <View style={styles.noticeTextRow}>
                            <Text style={styles.noticeBullet}>•</Text>
                            <Text style={styles.noticeText}>회원 탈퇴 시 보유하고 계신 쿠폰, 적립금은 즉시 소멸되어 환불 또는 양도되지 않습니다.</Text>
                        </View>
                        <View style={styles.noticeTextRow}>
                            <Text style={styles.noticeBullet}>•</Text>
                            <Text style={styles.noticeText}>탈퇴 시 개인 정보는 삭제 되나, 게시글은 유지 됩니다. 삭제를 원하시면 탈퇴 전 삭제해 주세요.</Text>
                        </View>
                        <View style={styles.noticeTextRow}>
                            <Text style={styles.noticeBullet}>•</Text>
                            <Text style={styles.noticeText}>전자상거래 법에 의해 일정 기간 정보를 보유할 필요가 있을 경우 법이 정한 기간 동안 해당 정보를 보유합니다.</Text>
                        </View>
                        <View style={styles.noticeTextRow}>
                            <Text style={styles.noticeBullet}>•</Text>
                            <Text style={styles.noticeText}>회원 탈퇴 후 재 가입은 90일 이후에 가능합니다.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.agreeTermContainer}>
                    <AgreeTermText
                        text='유의 사항을 확인하였으며, 이에 동의합니다.'
                        isActive={false}
                        onPressHandler={() => {}}
                        option={{
                            hideArrow: true,
                            renderRequirementText: true,
                        }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonWrapper}>
                        <DefaultColorButton text={'탈퇴할래요.'} onPressHandler={() => navigation.push('serviceWithdrawalThirdScreen')} />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <PrimaryColorButton text={'조금 더 고민할게요!'} onPressHandler={() => navigation.pop()} />
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

    },
    headerContainer: {
        marginTop: 24,
        marginHorizontal: 24,
    },
    textContainer: {
        marginTop: 34,
        marginHorizontal: 24,
    },
    textContainerTitle: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 24,
        fontWeight: '900',
        color: '#000000',
        lineHeight: 36,
    },
    textContainerText: {
        marginTop: 8,
        fontFamily: 'NanumSquareRound',
        fontSize: 14,
        fontWeight: '400',
        color: '#4D4D4D',
        lineHeight: 21,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 24,
        marginTop: 40,
        marginBottom: 40,
        gap: 8,
    },
    buttonWrapper: {
        flex: 1,
    },
    inputContainer: {
        marginTop: 40,
        marginHorizontal: 24,
    },
    inputContainerTextWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
    },
    inputContainerTitle: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: '900',
        color: '#000000',
    },
    inputContainerTitleBold: {
        color: '#1F5FFF',
    },
    inputContainerText: {
        fontFamily: 'NanumSquareRound',
        fontSize: 14,
        fontWeight: '400',
        color: '#B3B3B3',
    },
    inputContainerWrapper: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },
    textAreaContainer: {
        marginTop: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        padding: 16,
    },
    textArea: {
        fontFamily: 'NanumSquareRound',
        fontSize: 14,
        fontWeight: '400',
        color: '#000000',
        height: 120,
    },
    noticeContainer: {
        marginHorizontal: 24,
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },
    noticeTitleWrapper: {
    },
    noticeTitle: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: '900',
        color: '#000000',
    },
    noticeTextWrapper: {
        marginTop: 8,
        padding: 16,
        borderRadius: 16,
        backgroundColor: '#F4F4F4',
    },
    noticeTextRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 4,
    },
    noticeBullet: {
        fontFamily: 'NanumSquareRound',
        fontSize: 14,
        color: '#4D4D4D',
        marginRight: 8,
    },
    noticeText: {
        flex: 1,
        fontFamily: 'NanumSquareRound',
        fontSize: 14,
        fontWeight: '400',
        color: '#4D4D4D',
        lineHeight: 21,
    },
    agreeTermContainer: {
        marginHorizontal: 24,
        marginTop: 16,
    },
});

export default ServiceWithdrawalSecondScreen;