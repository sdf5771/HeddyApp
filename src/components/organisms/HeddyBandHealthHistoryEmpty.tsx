import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { HeddyBandEmpty } from '../../assets/svgs/HealthReportScreen';

function HeddyBandHealthHistoryEmpty(){

    return (
        <View style={styles.rootContainer}>
            <View style={styles.svgContainer}>
                <HeddyBandEmpty width={32} height={32} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>연결된 블루투스 기기가 없어요</Text>
                <Text style={styles.subText}>HEDDY의 블루투스 기기를 페어링해보세요!</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>연결하기</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 16,
        marginHorizontal: 24,
        paddingHorizontal: 16,
        paddingVertical: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 16,
    },
    svgContainer: {

    },
    textContainer: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    titleText: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'NanumSquareRoundEB',
        color: '#1a1a1a',
    },
    subText: {
        color: '#4D4D4D',
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'NanumSquareRoundR',
    },
    btnContainer: {
        marginTop: 16,
        width: '100%',
    },
    btn: {
        width: '100%',
        height: 34,
        borderRadius: 12,
        backgroundColor: '#1F5FFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'NanumSquareRoundEB',
    },
});

export default HeddyBandHealthHistoryEmpty;