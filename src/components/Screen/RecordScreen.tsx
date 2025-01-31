import React, { useEffect, useRef, useState } from 'react';
import { Animated, SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import {ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar, LocaleConfig, DateData} from 'react-native-calendars';
import { Positions } from 'react-native-calendars/src/expandableCalendar';
import { UpdateSources } from 'react-native-calendars/src/expandableCalendar/commons';
import { format } from 'date-fns';
import { RecordCard } from '../organisms';
import { CoachMarkLogo, FilterLogo } from '../../assets/svgs/atoms';
import { RecordFilterBottomSheet } from '../BottomSheet';
type TWeekDateState = {
    year: number;
    month: string;
    day: string;
    dayOfTheWeek: string;
}

const markedActiveStyle = {selected: true, marked: true, selectedColor: '#FF5252', dotColor: '#fff'};
const markedDisabledStyle = {dotColor: '#FF5252', marked: true,};

function RecordScreen({navigation}: {navigation: any}){
    const [dateState, setDateState] = useState(new Date().toISOString());
    const [isMonthView, setIsMonthView] = useState(false);
    const heightAnim = useRef(new Animated.Value(163)).current;
    const [weekDateState, setWeekDateState] = useState<TWeekDateState[] | null>(null);
    const [weekNumberState, setWeekNumberState] = useState(0);

    const [isVisible, setIsVisible] = useState(false);
    const toggleModal = () => {
        setIsVisible(!isVisible);
    };

    const calendarOnDateChanged = (date: string, updateSource: UpdateSources) => {
        const selectedDate = new Date(date);
        const startOfWeek = new Date(selectedDate);
        startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay()); // 주의 시작일 (일요일)
        setDateState(date);
        // 주차 계산 수정
        const firstDayOfYear = new Date(selectedDate.getFullYear(), 0, 1);
        const firstWeekday = firstDayOfYear.getDay(); // 연초의 요일
        const daysInYear = Math.floor((selectedDate.getTime() - firstDayOfYear.getTime()) / (24 * 60 * 60 * 1000));
        
        // 주차 계산: 1월 1일이 속한 주를 1주차로 설정
        const weekNumber = Math.ceil((daysInYear + firstWeekday + 1) / 7);
        
        // 1월의 주차 계산을 위해 연도와 월을 고려하여 조정
        const currentMonth = selectedDate.getMonth();
        const adjustedWeekNumber = (currentMonth === 0) ? weekNumber : Math.ceil((daysInYear + firstWeekday + 1 - (currentMonth * 30)) / 7);

        console.log('이번 주차: ', adjustedWeekNumber); // 주차 출력
        setWeekNumberState(adjustedWeekNumber);

        const weekDates = Array.from({ length: 7 }, (_, i) => {
            const defaultDayOfTheWeek = ['일', '월', '화', '수', '목', '금', '토'];
            const weekDate = new Date(startOfWeek);
            weekDate.setDate(startOfWeek.getDate() + i);
            return {
                year: weekDate.getFullYear(),
                month: `${weekDate.getMonth() + 1}`,
                day: weekDate.getDate().toString().padStart(2, '0'),
                dayOfTheWeek: defaultDayOfTheWeek[i],
            };
        });

        console.log('선택된 날짜: ', date); // 선택된 날짜 출력
        console.log('이번 주의 날짜들: ', weekDates); // 주간 날짜들 출력
        console.log('updateSource ', updateSource);

        switch(updateSource){
            case 'weekScroll':
                console.log('weekScroll');
                setWeekDateState(weekDates);
                break;
            case 'dayPress':
                console.log('dayPress');
                console.log('weekDates: ', weekDates);
                setWeekDateState(weekDates);
                break;
            case 'pageScroll':
                console.log('pageScroll');
                // setWeekDateState(weekDates);
                break;
        }
    };

    useEffect(() => {
        // isMonthView 상태가 변경될 때마다 애니메이션 실행
        Animated.timing(heightAnim, {
            toValue: isMonthView ? 404 : 163,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [isMonthView]); // isMonthView가 변경될 때마다 실행

    const animatedStyle = {
        ...styles.calendarSection,
        height: heightAnim,
    };
    const calendarHeight = isMonthView ? 404 : 163;

    LocaleConfig.locales['kr'] = {
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    };

    LocaleConfig.defaultLocale = 'kr';

    return (
        <SafeAreaView style={styles.rootContainer}>
            <Animated.View style={animatedStyle}>
                {
                    !isMonthView ?
                    <View style={styles.calendarSectionWeekHeader}>
                        <TouchableOpacity onPress={() => {
                            navigation.push('coachMarkScreen', { screenName: 'RecordScreen' });
                        }}>
                            <View>
                                <CoachMarkLogo />
                            </View>
                        </TouchableOpacity>
                            <View style={styles.calendarSectionWeekHeaderButtonContainer}>
                                <TouchableOpacity onPress={() => {
                                    setIsMonthView(false);
                                }}>
                                    <View style={isMonthView ? styles.calendarSectionWeekHeaderDefaultButton : styles.calendarSectionWeekHeaderPrimaryButton}>
                                        <Text style={isMonthView ? styles.calendarSectionWeekHeaderDefaultButtonText : styles.calendarSectionWeekHeaderPrimaryButtonText}>주간</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    setIsMonthView(true);
                                }}>
                                    <View style={isMonthView ? styles.calendarSectionWeekHeaderPrimaryButton : styles.calendarSectionWeekHeaderDefaultButton}>
                                        <Text style={isMonthView ? styles.calendarSectionWeekHeaderPrimaryButtonText : styles.calendarSectionWeekHeaderDefaultButtonText}>월간</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        <TouchableOpacity onPress={toggleModal}>
                            <View>
                                <FilterLogo />
                            </View>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.calendarSectionMonthHeader}>
                        <View style={styles.calendarSectionWeekHeader}>
                            <TouchableOpacity>
                                <View>
                                    <CoachMarkLogo />
                                </View>
                            </TouchableOpacity>
                                <View style={styles.calendarSectionWeekHeaderButtonContainer}>
                                    <TouchableOpacity onPress={() => {
                                        setIsMonthView(false);
                                    }}>
                                        <View style={isMonthView ? styles.calendarSectionWeekHeaderDefaultButton : styles.calendarSectionWeekHeaderPrimaryButton}>
                                            <Text style={isMonthView ? styles.calendarSectionWeekHeaderDefaultButtonText : styles.calendarSectionWeekHeaderPrimaryButtonText}>주간</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        setIsMonthView(true);
                                    }}>
                                        <View style={isMonthView ? styles.calendarSectionWeekHeaderPrimaryButton : styles.calendarSectionWeekHeaderDefaultButton}>
                                            <Text style={isMonthView ? styles.calendarSectionWeekHeaderPrimaryButtonText : styles.calendarSectionWeekHeaderDefaultButtonText}>월간</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            <TouchableOpacity onPress={toggleModal}>
                                <View>
                                    <FilterLogo />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                <View style={styles.calendarContainer}>
                <CalendarProvider
                    date={dateState}
                    onDateChanged={calendarOnDateChanged}
                    showTodayButton={false}
                    >
                    {!isMonthView ? (
                        <WeekCalendar 
                        firstDay={0} 
                        // markedDates={marked.current}
                        // disableAllTouchEventsForDisabledDays
                        monthFormat="yyyy.MM"
                        allowShadow={false}
                        markedDates={{
                            '2025-01-28': markedActiveStyle,
                            '2025-01-29': markedDisabledStyle,
                            '2025-01-30': markedDisabledStyle,
                            '2025-01-31': markedDisabledStyle,
                        }}
                        theme={{
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#1A1A1A',
                            selectedDayBackgroundColor: '#FF5252',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#FF5252',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#FF5252',
                            selectedDotColor: '#ffffff',
                            textDayStyle: {
                                color: '#2d4150',
                            },
                            textMonthFontSize: 18,
                            textMonthFontFamily: 'NanumSquareRoundEB',
                            textMonthFontWeight: 'bold' as const,
                            textDayFontFamily: 'NanumSquareRoundB',
                            textDayFontWeight: '700' as const,
                            textDayFontSize: 14,
                            arrowColor: '#1F5FFF',
                            textDayHeaderFontFamily: 'NanumSquareRoundEB',
                            textDayHeaderFontWeight: 'bold' as const,
                            textDayHeaderFontSize: 14,
                        }}
                        />
                    ) : (
                        <ExpandableCalendar
                        initialPosition={Positions.OPEN}
                        // horizontal={false}
                        disablePan
                        hideKnob
                        // disableWeekScroll
                        // theme={theme.current}
                        disableAllTouchEventsForDisabledDays
                        firstDay={0}
                        // markedDates={marked.current}
                        // leftArrowImageSource={leftArrowIcon}
                        // rightArrowImageSource={rightArrowIcon}
                        closeOnDayPress={false}
                        allowShadow={false}
                        monthFormat="yyyy.MM"
                        markedDates={{
                            '2025-01-28': markedActiveStyle,
                            '2025-01-29': markedDisabledStyle,
                            '2025-01-30': markedDisabledStyle,
                            '2025-01-31': markedDisabledStyle,
                        }}
                        theme={{
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#1A1A1A',
                            selectedDayBackgroundColor: '#FF5252',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#FF5252',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#FF5252',
                            selectedDotColor: '#ffffff',
                            textDayStyle: {
                                color: '#2d4150',
                            },
                            textMonthFontSize: 18,
                            textMonthFontFamily: 'NanumSquareRoundEB',
                            textMonthFontWeight: 'bold' as const,
                            textDayFontFamily: 'NanumSquareRoundB',
                            textDayFontWeight: '700' as const,
                            textDayFontSize: 14,
                            arrowColor: '#1F5FFF',
                            textDayHeaderFontFamily: 'NanumSquareRoundEB',
                            textDayHeaderFontWeight: 'bold' as const,
                            textDayHeaderFontSize: 14,
                        }}
                        />
                    )}
                </CalendarProvider>
                </View>
            </Animated.View>
            <Animated.View style={styles.historyCardSection}>
                <View style={styles.historyCardSectionHeader}>
                    {
                        weekDateState && weekNumberState ?
                        <View style={styles.weekTitleContainer}>
                            <Text style={styles.weekTitleText}>{weekDateState ? weekDateState[0].month : ''}월 {weekNumberState}주차</Text>
                            <Text style={styles.weekTitleDateText}>{weekDateState ? `${weekDateState[0].month}월.${weekDateState[0].day}.${weekDateState[0].dayOfTheWeek} ~ ${weekDateState[6].month}월.${weekDateState[6].day}.${weekDateState[6].dayOfTheWeek}` : ''}</Text>
                        </View>
                        : null
                    }
                </View>
                <ScrollView style={styles.historyCardSectionContainer}>
                    {
                        weekDateState ? weekDateState.map((weekDate, index) => (
                            <View key={`${weekDate.month}.${weekDate.day}`} style={{marginBottom: 16}}>
                                <RecordCard 
                                isEmptyView={index !== 0 ? true : false} 
                                date={`${weekDate.month}.${weekDate.day}`}
                                dayOfTheWeek={weekDate.dayOfTheWeek}
                                writeButtonOnPress={() => {
                                    navigation.push('recordWriteScreen', weekDate);
                                }}
                                />
                            </View>
                        )) : null
                    }
                </ScrollView>
            </Animated.View>
            <RecordFilterBottomSheet isVisible={isVisible} toggleModal={toggleModal} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    calendarSection: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    calendarSectionWeekHeader: {
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 32,
        paddingHorizontal: 24,
    },
    calendarSectionWeekHeaderButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 96,
        height: 32,
        borderRadius: 24,
        backgroundColor: '#F4F4F4',
    },
    calendarSectionWeekHeaderPrimaryButton: {
        width: 50,
        height: 32,
        backgroundColor: '#1F5FFF',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarSectionWeekHeaderPrimaryButtonText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: '900',
        color: '#ffffff',
    },
    calendarSectionWeekHeaderDefaultButton: {
        width: 50,
        height: 32,
        backgroundColor: '#F4F4F4',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarSectionWeekHeaderDefaultButtonText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: '900',
        color: '#808080',
    },
    calendarSectionMonthHeader:{
        display: 'flex',
        alignItems: 'center',
    },
    calendarSectionHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    calendarContainer: {
        display: 'flex',
        width: '100%',
        height: 504,
        // overflow: 'hidden',
    },
    historyCardSection: {
        flex: 1,
        backgroundColor: '#F4F4F4',
    },
    weekTitleContainer:{
        marginTop: 32,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    weekTitleText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 18,
        fontWeight: '900',
        color: '#000000',
    },
    weekTitleDateText: {
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        fontWeight: '700',
        color: '#808080',
    },
    historyCardSectionHeader: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    historyCardSectionContainer: {
        marginTop: 16,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        paddingHorizontal: 24,
    },
    monthText: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
    },
});
export default RecordScreen;
