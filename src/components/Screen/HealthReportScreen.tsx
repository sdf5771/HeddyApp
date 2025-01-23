import React, { useRef, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { AfternoonDog, AfternoonDogWide, ArrowRightBlue } from '../../assets/svgs/HealthReportScreen';
import { PetAvatarDefaultLogo } from '../../assets/svgs/atoms';
import { HeddyBandHealthHistory, HeddyBandHealthHistoryEmpty } from '../organisms';
import { ChangePetStatusBottomSheet } from '../BottomSheet';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

function HealthReportScreen({navigation}){
    const [isVisible, setIsVisible] = useState(false);
    const toggleModal = () => {
        setIsVisible(!isVisible);
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.wideSvgContainer}>
                {/* <AfternoonDog width={deviceWidth} height={deviceWidth * (280 / 360)} /> */}
                <AfternoonDogWide />
            </View>
            <View style={styles.healthReportListContainer}>
                <View style={styles.healthReportListHeader}>
                    <View style={styles.petInformationBox}>
                        <PetAvatarDefaultLogo width={40} height={40} />
                        <View style={styles.petInfoTextBox}>
                            <TouchableOpacity onPress={() => toggleModal()}>
                                <Text style={styles.petNameText}>반려동물이름 <ArrowRightBlue /></Text>
                            </TouchableOpacity>
                            <Text style={styles.petStatusText}>9살 / 6kg</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text onPress={() => navigation.push('healthReportDetailScreen')} style={styles.editText}>편집하기</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollViewSection}>
                    <HeddyBandHealthHistory />
                    <View style={styles.lastChildWrapper}>
                        <HeddyBandHealthHistoryEmpty />
                    </View>
                </ScrollView>
            </View>
            <ChangePetStatusBottomSheet isVisible={isVisible} toggleModal={toggleModal} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wideSvgContainer: {
        zIndex: 0,
        position: 'absolute',
        width: 1920,
        top: -160,
        left: (-1920 - -deviceWidth) / 2,
    },
    healthReportListContainer: {
        zIndex: 0,
        position: 'absolute',
        top: 256,
        left: 0,
        width: deviceWidth,
        height: deviceHeight - 256,
        backgroundColor: '#f4f4f4',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    healthReportListHeader: {
        marginTop: 32,
        paddingBottom: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    editText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: '700',
        color: '#808080',
        textDecorationLine: 'underline',
    },
    petInformationBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    petInfoTextBox: {
        gap: 4,
    },
    petNameText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 20,
        fontWeight: '700',
        color: '#1a1a1a',
    },
    petStatusText: {
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        fontWeight: '700',
        color: '#4D4D4D',
    },
    scrollViewSection: {
        marginBottom: 80,
    },
    lastChildWrapper: {
        marginBottom: 40,
    },
})

export default HealthReportScreen;