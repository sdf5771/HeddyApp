import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { AfternoonDog, AfternoonDogWide, ArrowRightBlue } from '../../assets/svgs/HealthReportScreen';
import { PetAvatarDefaultLogo } from '../../assets/svgs/atoms';
import { HeddyBandHealthHistory } from '../organisms';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

function HealthReportScreen({navigation}){

    return (
        <SafeAreaView>
            <View style={styles.wideSvgContainer}>
                {/* <AfternoonDog width={deviceWidth} height={deviceWidth * (280 / 360)} /> */}
                <AfternoonDogWide />
            </View>
            <View style={styles.healthReportListContainer}>
                <View style={styles.healthReportListHeader}>
                    <View style={styles.petInformationBox}>
                        <PetAvatarDefaultLogo width={40} height={40} />
                        <View style={styles.petInfoTextBox}>
                            <TouchableOpacity>
                                <Text style={styles.petNameText}>반려동물이름 <ArrowRightBlue /></Text>
                            </TouchableOpacity>
                            <Text style={styles.petStatusText}>9살 / 6kg</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.editText}>편집하기</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollViewSection}>
                    <HeddyBandHealthHistory />
                </ScrollView>
            </View>
            {/* <View>
                <TouchableOpacity onPress={() => navigation.push('petListScreen')}>
                    <Text>반려동물 리스트</Text>
                </TouchableOpacity>
            </View> */}
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
        zIndex: 1,
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    editText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: 'bold',
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
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    petStatusText: {
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D4D4D',
    },
    scrollViewSection: {

    },
})

export default HealthReportScreen;