import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ArrowRightBlue, HeddyBandToken } from '../../assets/svgs/HealthReportScreen';
import { KcalLogo, PawLogo, DistanceLogo, HeartRateLogo } from '../../assets/svgs/atoms';

function HeddyBandHealthHistory(){

    return(
        <View style={styles.heddyBandHealthHistoryRoot}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>헤디밴드 기록</Text>
                <View style={styles.batteryStatusContainer}>
                    <View>
                        <HeddyBandToken />
                    </View>
                    <Text>36%</Text>
                </View>
            </View>
            <View style={styles.heddyBandStatusBox}>
                <View style={styles.statusElement}>
                    <View style={styles.statusTitle}>
                        <View><HeartRateLogo /></View>
                        <Text style={styles.statusTitleText}>심박수</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.statusTextWrapper}>
                            <Text style={styles.statusValueText}>103</Text>
                            <Text style={styles.statusTypeText}>BPM</Text>
                            <View><ArrowRightBlue /></View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.horizontalLine}></View>
                <View style={styles.statusElement}>
                    <View style={styles.statusTitle}>
                        <View><KcalLogo /></View>
                        <Text style={styles.statusTitleText}>칼로리</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.statusTextWrapper}>
                            <Text style={styles.statusValueText}>17</Text>
                            <Text style={styles.statusTypeText}>Kcal</Text>
                            <View><ArrowRightBlue /></View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.horizontalLine}></View>
                <View style={styles.statusElement}>
                    <View style={styles.statusTitle}>
                        <View><DistanceLogo /></View>
                        <Text style={styles.statusTitleText}>이동거리</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.statusTextWrapper}>
                            <Text style={styles.statusValueText}>0.32</Text>
                            <Text style={styles.statusTypeText}>km</Text>
                            <View><ArrowRightBlue /></View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.horizontalLine}></View>
                <View style={styles.statusElement}>
                    <View style={styles.statusTitle}>
                        <View><PawLogo /></View>
                        <Text style={styles.statusTitleText}>걸음수</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.statusTextWrapper}>
                            <Text style={styles.statusValueText}>98</Text>
                            <Text style={styles.statusTypeText}>걸음</Text>
                            <View><ArrowRightBlue /></View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heddyBandHealthHistoryRoot: {
        marginTop: 32,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    titleText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    batteryStatusContainer: {
        width: 74,
        height: 32,
        borderRadius: 24,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heddyBandStatusBox: {
        marginTop: 20.5,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        height: 200,
        gap: 12,
    },
    statusElement:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 24,
    },
    statusTitle:{
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    statusTitleText : {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
    statusTextWrapper: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    statusValueText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4D4D4D',
    },
    statusTypeText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#B3B3B3',
    },

    horizontalLine: {
        height: 1,
        backgroundColor: '#E4E4E4',
    }
})

export default HeddyBandHealthHistory;