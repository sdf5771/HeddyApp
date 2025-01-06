import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

function RecordScreen(){

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
