import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import { StackPopHeaderTitle } from '../Atoms';

const TERM_TEXT = `
제 1조 (개인정보의 처리 목적)
HEDDY(이하 "회사")은 서비스 제공을 위해 아래 목적으로 개인정보를 처리합니다. 가. 회원 가입 및 관리: 회원 가입 및 본인 확인, 회원 정보 관리, 서비스 제공에 따른 본인 식별, 회원탈퇴 등을 목적으로 개인정보를 처리합니다. 나. 서비스 제공: 서비스 제공, 서비스 이용에 따른 통계 및 분석, 서비스 개선 등을 목적으로 개인정보를 처리합니다. 다. 고충 처리: 고객의 문의 및 불만 처리, 서비스 제공과 관련하여 발생한 분쟁의 해결 등을 목적으로 개인정보를 처리합니다.  
제 2조 (처리하는 개인정보의 항목)
회사는 다음과 같은 개인정보를 처리합니다. 가. 회원 가입 시: 이름, 아이디, 비밀번호, 이메일 주소, 연락처 등의 정보를 수집합니다. 나. 서비스 이용 과정에서 자동으로 생성되거나 제공된 정보: 접속 로그, 쿠키, 접속 IP 정보 등의 정보를 수집합니다.

제 3조 (개인정보의 보유 및 이용 기간)
회사는 원칙적으로 개인정보 처리 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다만, 관련 법령에 의해 보존해야 하는 경우에는 해당 기간 동안 보관하며, 이용되지 않습니다.

제 4조 (개인정보의 제3자 제공)
회사는 개인정보를 제3자에게 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다. 가. 회원의 동의가 있는 경우 나. 법령에 의해 제공이 요구되는 경우

제 5조 (개인정보의 파기)
회사는 개인정보의 처리 목적이 달성되거나 보유 및 이용 기간이 종료된 경우 해당 정보를 지체 없이 파기합니다. 파기 방법은 기록물, 전자적 파일 등 현저한 재생 능력이 없는 방법으로 안전하게 파기하며, 개인정보 보호 책임자의 관리하에 진행됩니다.

제 6조 (개인정보 보호책임자)
회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정합니다.

[개인정보 보호책임자 정보 기재]
제 7조 (이용자의 권리와 행사 방법)
이용자는 언제든지 자신의 개인정보를 조회하고 수정할 수 있으며, 회원탈퇴를 요청할 수 있습니다. 개인정보 조회, 수정, 탈퇴 등의 요청은 개인정보 보호책임자에게 서면, 전화, 이메일 등으로 연락하여 진행할 수 있습니다.

제 8조 (개인정보 보호책임자)
개인정보 보호책임자: 장병익 
연락처: 010-4794-5464 
이메일: kzsc5464@naver.com

제 9조 (개인정보 처리방침의 변경)
이 개인정보 처리방침은 법령, 정책 또는 보안 기술의 변경에 따라 내용이 변경될 수 있습니다. 변경된 개인정보 처리방침은 서비스 사이트를 통해 공지됩니다. 본 방침은 2025-12-31부터 시행됩니다.
`;

function TermOfServiceScreen({navigation}){
    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <StackPopHeaderTitle navigation={navigation} text={'HEDDY 이용 약관에 동의'} />
                </View>
                <View style={styles.termTextContainer}>
                    <Text style={styles.termText}>{TERM_TEXT}</Text>
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
    termTextContainer: {
        marginVertical: 18,
        paddingHorizontal: 24,
    },
    termText: {
        fontFamily: 'NanumSquareRound',
        fontSize: 12,
        fontWeight: '400',
        color: '#4D4D4D',
        lineHeight: 19,
    },
})

export default TermOfServiceScreen;