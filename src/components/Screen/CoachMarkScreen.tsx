import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, Image, Dimensions, Pressable, Text } from 'react-native';
import { CoachMarkMessageBox, DefaultColorButton, PrimaryColorButton, StackPopHeaderTitle } from '../Atoms';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const COACH_MARK_DATA_LIST = {
    RecordScreen: [
        {
            title: '기록 카드 가이드',
            imageSrc: require('../../assets/images/CoachMarkScreen/RecordScreen_1.png'),
            messageBoxs: [
                {
                    number: 1,
                    title: '주간/월간으로 기록비교',
                    description: '작성한 기록을 주간/월간으로 비교하여 볼 수 있는 기능이에요!',
                },
                {
                    number: 2,
                    title: '건강 이상 필터링',
                    description: '작성한 기록들 중, 보고싶은 이상기록들만 필터링을 하여 달력에 적용시키는 기능이에요!',
                },
            ],
        },
        {
            title: '기록 카드 가이드',
            imageSrc: require('../../assets/images/CoachMarkScreen/RecordScreen_2.png'),
            messageBoxs: [
                {
                    number: 1,
                    title: '주간 기록카드 달력',
                    description: '이번 주 작성된 기록 현황을 확인할 수 있어요. 빨간 점이 있는 날짜는 작성된 기록현황이며, 회색 박스안에 있는 날짜는 오늘 날짜를 의미해요!',
                },
                {
                    number: 2,
                    title: '기록 카드',
                    description: '이번 주 동안 작성된 기록카드들 이에요. 화살표 아이콘을 터치하여 해당 날짜에 작성된 상세한 기록들 또한 확인하거나, 작성하기 버튼을 터치하여 기록을 작성할 수 있어요!',
                },
            ],
        },
        {
            title: '건강 화면 가이드',
            imageSrc: require('../../assets/images/CoachMarkScreen/RecordScreen_3.png'),
            messageBoxs: [
                {
                    number: 1,
                    title: '월간 기록카드 달력',
                    description: '월간 기록카드 탭을 터치하여, 한달 동안 작성된 기록들을 확인할 수 있어요. 빨간점이 있는 날짜는 작성된 기록 현황이며, 빨간 박스 안에 있는 날짜는 현재 선택된 날짜를 의미해요! 자유롭게 날짜를 선택하여 선택된 날짜의 기록을 하단에서 확인이 가능해요!',
                },
            ],
        },
        {
            title: '건강 화면 가이드',
            imageSrc: require('../../assets/images/CoachMarkScreen/RecordScreen_4.png'),
            messageBoxs: [
                {
                    number: 1,
                    title: '기록카드 편집하기',
                    description: '월간 기록카드 달력에서 선택한 날짜의 기록카드를 수정할 수 있는 버튼이에요!',
                },
                {
                    number: 2,
                    title: '기록카드',
                    description: '월간 기록카드 달력에서 선택한 날짜의 기록카드에요! 선택한 날짜에 내 친구가 어떤 문제가 있었는지 확인할 수 있고 직접 작성한 기록과 그날 사진을 확인할 수 있어요!',
                },
            ],
        },
        {
            title: '건강 화면 가이드',
            imageSrc: require('../../assets/images/CoachMarkScreen/RecordScreen_5.png'),
            messageBoxs: [
                {
                    number: 1,
                    title: '이상증상 선택',
                    description: '오늘 내 친구에게 문제가 있었던 항목을 선택하여 기록할 수 있어요!',
                },
                {
                    number: 2,
                    title: '수기기록',
                    description: '오늘 내 친구에게 있었던 일을 자세하게 입력하여 기록해보세요!',
                },
            ],
        },
        {
            title: '건강 화면 가이드',
            imageSrc: require('../../assets/images/CoachMarkScreen/RecordScreen_6.png'),
            messageBoxs: [
                {
                    number: 1,
                    title: '사진기록',
                    description: '오늘 내 친구의 사진이나 문제가 있었던 상황을 촬영하여 기록해보세요!',
                },
                {
                    number: 2,
                    title: '입력완료',
                    description: '모든 항목을 작성하였다면, 입력완료 버튼을 터치하여 작성을 마쳐보세요!',
                },
            ],
        },
    ],
    HealthReportScreen: [
        {
            title: '건강 리포트 가이드',
            imageSrc: require('../../assets/images/CoachMarkScreen/HealthReportScreen_1.png'),
            messageBoxs: [
                {
                    number: 1,
                    title: '헤디밴드 실시간 기록',
                    description: '헤디밴드가 내 친구의 건강상태를 체크하여 실시간으로 확인할 수 있어요. 각 데이터 수치 옆의 아이콘을 클릭하면 시간별로 데이터를 쉽게 비교할 수 있어요.',
                },
                {
                    number: 2,
                    title: '헤디밴드 배터리 잔량',
                    description: '헤디밴드의 배터리 잔량을 확인할 수 있어요.',
                },
            ],
        },
        {
            title: '건강 리포트 가이드',
            imageSrc: require('../../assets/images/CoachMarkScreen/HealthReportScreen_2.png'),
            messageBoxs: [
                {
                    number: 1,
                    title: '내 친구 프로필',
                    description: '내 친구를 등록할 때 작성했던 정보를 볼 수 있어요. 이름 옆의 아이콘을 터치하면 새 친구를 등록하거나, 등록된 다른 친구의 정보를 볼 수 있어요.',
                },
                {
                    number: 2,
                    title: '내 친구 프로필 편집',
                    description: '등록된 내 친구의 정보를 수정할 수 있는 버튼이에요.',
                },
            ],
        },
        {
            title: '건강 리포트 가이드',
            imageSrc: require('../../assets/images/CoachMarkScreen/HealthReportScreen_3.png'),
            messageBoxs: [
                {
                    number: 1,
                    title: '주간 기록카드',
                    description: '이번 주 동안 작성된 기록카드들을 보며 내 친구가 어떤 문제가 있었는지 바로 확인할 수 있어요! 화살표 아이콘을 터치하여 해당 날짜에 작성된 상세한 기록들 또한 확인할 수 있어요.',
                },
                {
                    number: 2,
                    title: '주간 기록카드 작성',
                    description: '작성되지 않은 기록카드들은 작성하기 버튼을 클릭하여 작성이 가능해요!',
                },
            ],
        },
        {
            title: '건강 화면 가이드',
            imageSrc: require('../../assets/images/CoachMarkScreen/HealthReportScreen_4.png'),
            messageBoxs: [
                {
                    number: 1,
                    title: '건강 리포트',
                    description: 'HEDDY의 블루투스 기기를 통해 생성된 내 친구의 데이터를 확인하고, 작성된 기록카드를 간략하게 확인할 수 있는 HEDDY의 메인 페이지에요!',
                },
                {
                    number: 2,
                    title: '기록카드',
                    description: '내 친구에게 있었던 일들과, 이상이 있던 증상들을 기록하고 날짜 별로 비교할 수 있는 페이지에요!',
                },
                {
                    number: 3,
                    title: '마이페이지',
                    description: '내 정보와 내 친구의 등록현황을 확인하고, HEDDY의 기타 설정들을 바꾸는 페이지에요!',
                },
            ],
        },
    ],
}

const CoachMarkScreen = ({navigation}) => {
    const [pageNumber, setPageNumber] = useState(0);

    const handleNextButton = () => {
        if (pageNumber < COACH_MARK_DATA_LIST.RecordScreen.length - 1) {
            setPageNumber(pageNumber + 1);
        } else {
            setPageNumber(0);
        }
    };

    const handlePreviousButton = () => {
        if (pageNumber > 0) {
            setPageNumber(pageNumber - 1);
        }
    };

    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.headerContainer}>
                <StackPopHeaderTitle navigation={navigation} text={COACH_MARK_DATA_LIST.RecordScreen[pageNumber].title} />
            </View>
            <View style={styles.imageContainer}>
                <Image source={COACH_MARK_DATA_LIST.RecordScreen[pageNumber].imageSrc} style={styles.image} />
            </View>
            <ScrollView style={styles.contentContainer}>
                {
                    COACH_MARK_DATA_LIST.RecordScreen[pageNumber].messageBoxs.map((item, index, array) => {
                        return (
                            <View 
                                key={index + item.title} 
                                style={[
                                    styles.messageBoxWrapper,
                                    index === array.length - 1 && styles.lastMessageBoxWrapper,
                                ]}
                            >
                                <CoachMarkMessageBox number={item.number} title={item.title} description={item.description} />
                            </View>
                        );
                    })
                }
            </ScrollView>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <DefaultColorButton 
                        text="이전" 
                        onPressHandler={handlePreviousButton} />
                </View>
                <View style={styles.buttonWrapper}>
                    <PrimaryColorButton 
                        text={`${pageNumber === COACH_MARK_DATA_LIST.RecordScreen.length - 1 ? `돌아가기 (${pageNumber + 1}/${COACH_MARK_DATA_LIST.RecordScreen.length})` : `다음 (${pageNumber + 1}/${COACH_MARK_DATA_LIST.RecordScreen.length})`}`} 
                        onPressHandler={handleNextButton} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        position: 'relative',
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    imageContainer: {
        backgroundColor: '#ffffff',
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH * (400/360),
        minHeight: SCREEN_WIDTH * (400/360),
        maxHeight: SCREEN_WIDTH * (600/360),
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F4F4F4',
        paddingTop: 32,
        paddingHorizontal: 24,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: '100%',
        height: 101,
        paddingHorizontal: 24,
        gap: 8,
    },
    buttonWrapper: {
        flex: 1,
    },
    messageBoxWrapper: {
        marginBottom: 16,
    },
    lastMessageBoxWrapper: {
        marginBottom: 131,
    },
});

export default CoachMarkScreen;