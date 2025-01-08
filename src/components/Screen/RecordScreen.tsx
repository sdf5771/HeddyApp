import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar} from 'react-native-calendars';

function RecordScreen(){
    const [isWeekView, setIsWeekView] = useState(false);

    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.calendarSection}>
                <View style={styles.calendarSectionHeader}>
                    <TouchableOpacity>
                        <View>
                            
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.calendarContainer}>
                    <CalendarProvider 
                        date={new Date().toISOString()}
                        theme={{
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#b6c1cd',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                        }}
                    >
                    <ExpandableCalendar
                        theme={{
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#b6c1cd',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                        }}
                        initialPosition={isWeekView ? 'open' : 'closed'}
                        disablePan={isWeekView}
                        hideKnob={true}
                        firstDay={0}
                        hideArrows={true} />
                    </CalendarProvider>
                </View>
            </View>
            <View style={styles.historyCardSection}>
                <View style={styles.historyCardSectionHeader}>
                    <Text>기록 카드</Text>
                </View>
                <ScrollView style={styles.historyCardSectionContainer}>

                </ScrollView>
            </View>
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
        height: 163,
        backgroundColor: '#ffffff',
    },
    calendarSectionHeader: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    calendarContainer: {
        display: 'flex',
    },
    historyCardSection: {
        flex: 1,
        backgroundColor: '#F4F4F4',
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
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        paddingHorizontal: 24,
        marginBottom: 34,
    },
});
export default RecordScreen;
