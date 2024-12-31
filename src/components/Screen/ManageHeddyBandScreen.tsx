import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { StackPopHeaderTitle } from '../Atoms';
import { BatteryLogo } from '../../assets/svgs/atoms';

function ManageHeddyBandScreen({navigation}: {navigation: any}){
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.headerContainer}>
                <StackPopHeaderTitle 
                    navigation={navigation}
                    text="블루투스 관리"
                />
            </View>
            <View style={styles.heddyBandImageContainer}>
                <View style={{width: '100%', height: 164, backgroundColor: '#F4F4F4'}}></View>
                <View style={styles.batteryInfoBox}>
                    <BatteryLogo width={16} height={16} />
                    <Text style={styles.batteryInfoText}>36%</Text>
                </View>
            </View>
            <View style={styles.heddyBandInfoContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>정보</Text>
                </View>
                <View style={styles.heddyBandInfoBoxContainer}>
                    <View style={styles.heddyBandInfoBox}>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={styles.heddyBandInfoBoxTitle}>제품명</Text>
                            <Text style={styles.heddyBandInfoBoxText}>반려동물 이름의 HEDDY BAND</Text>
                        </View>
                        <View style={styles.horizontalLine} />
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={styles.heddyBandInfoBoxTitle}>제품번호</Text>
                            <Text style={styles.heddyBandInfoBoxText}>0000-AAAA-A1A1-00</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 40, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity>
                        <Text style={styles.bluetoothDisconnectText}>블루투스 연결 해제</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        display: 'flex',
        marginTop: 24,
        paddingHorizontal: 24,
    },
    heddyBandImageContainer: {
        marginTop: 32,
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        paddingHorizontal: 24,
        paddingBottom: 40,
    },
    hedgyBandImageBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    heddyBandInfoContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 24,
        backgroundColor: '#F4F4F4',
    },
    heddyBandInfoBoxContainer: {
        marginTop: 16,
        display: 'flex',
    },
    heddyBandInfoBoxTitle: {
        fontFamily: 'NanumSquareRoundR',
        fontSize: 12,
        fontWeight: '400',
        color: '#1A1A1A',
    },
    heddyBandInfoBoxText: {
        fontFamily: 'NanumSquareRoundR',
        fontSize: 12,
        fontWeight: '400',
        color: '#808080',
    },
    horizontalLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#E4E4E4',
        marginVertical: 16,
    },
    heddyBandInfoBox: {
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 16,
    },
    titleContainer: {
        marginTop: 32,
        display: 'flex',
    },
    titleText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 18,
        fontWeight: '700',
        color: '#1a1a1a',
    },
    bluetoothDisconnectText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: '700',
        color: '#B3B3B3',
        textDecorationLine: 'underline',
    },
    batteryInfoBox: {
        display: 'flex',
        width: 74,
        height: 32,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#F4F4F4',
        borderRadius: 24,
        gap: 4,
    },
    batteryInfoText: {
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        fontWeight: '700',
        color: '#1A1A1A',
    },
});

export default ManageHeddyBandScreen;

