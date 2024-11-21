import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { ArrowLeftGray } from '../../assets/svgs/atoms';
import { ActivateBtn } from '../Atoms';
import { PetVisualBackground, HeartRateUnactive, HeartRageActive, KcalUnacitve, KcalActive, MarkerUnactive, MarkerActive, PawUnactive, PawActive } from '../../assets/svgs/HealthReportDetailScreen';
import { HeartRateReportElement } from '../organisms';
import { CalendarLogo, SunLogo, NightLogo } from '../../assets/svgs/HealthReportDetailScreen';
import { useNavigation } from '@react-navigation/native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

function HealthReportDetailScreen(){
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.prevNavigateBtn}>
                            <ArrowLeftGray />
                            <Text style={styles.prevNavigateText}>뒤로가기</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
                    <ActivateBtn 
                        text="심박수"
                        DefaultIcon={HeartRateUnactive}
                        ActivateIcon={HeartRageActive}
                        isActive={true}
                        onPressHandler={() => {}}
                    />
                    <View style={{marginHorizontal: 8}}>
                        <ActivateBtn 
                            text="칼로리"
                            DefaultIcon={KcalUnacitve}
                            ActivateIcon={KcalActive}
                            isActive={false}
                            onPressHandler={() => {}}
                        />
                    </View>
                    <ActivateBtn 
                        text="이동거리"
                        DefaultIcon={MarkerUnactive}
                        ActivateIcon={MarkerActive}
                        isActive={false}
                        onPressHandler={() => {}}
                    />
                    <View style={{marginLeft: 8, marginRight: 48}}>
                        <ActivateBtn 
                            text="걸음수"
                            DefaultIcon={PawUnactive}
                            ActivateIcon={PawActive}
                            isActive={false}
                            onPressHandler={() => {}}
                        />
                    </View>
                </ScrollView>
                <View style={styles.petStatusVisualContainer}>
                    <PetVisualBackground 
                        width={deviceWidth}
                        height={deviceWidth * (440 / 360)}
                        />
                    <View style={styles.petStatusTextWrapper}>
                        <Text style={styles.petStatusTitle}>현재 심박수</Text>
                        <Text style={styles.petHeartRateText}>131</Text>
                        <Text style={styles.bpmText}>BPM</Text>
                    </View>
                </View>
                <View style={styles.petStatusReportContainer}>
                    <View style={styles.petStatusReportHeader}>
                        <Text style={styles.petStatusReportTitle}>리포트</Text>
                        <Text style={styles.petStatusReportDescription}>단위 : BPM</Text>
                    </View>
                    <View style={styles.reportContainer}>
                        <HeartRateReportElement
                            LogoComponent={CalendarLogo}
                            title="현재"
                            timeInfo="7.18.목"
                        />
                        <HeartRateReportElement
                            LogoComponent={CalendarLogo}
                            title="지난날"
                            timeInfo="7.17.수"
                            buttonOption={{
                                    text: '이동하기',
                                    btnPressHandler: () => {},
                            }}
                        />
                        <HeartRateReportElement
                            LogoComponent={SunLogo}
                            title="낮"
                            timeInfo="06:00 ~ 18:00"
                        />
                        <HeartRateReportElement
                            LogoComponent={NightLogo}
                            title="밤"
                            timeInfo="18:00 ~ 00:00"
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        display: 'flex',
        paddingHorizontal: 24,
    },
    prevNavigateBtn: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
    },
    prevNavigateText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#808080',
    },
    tabContainer: {
        marginTop: 16,
        paddingHorizontal: 24,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
    petStatusVisualContainer: {
        marginTop: 24,
        position: 'relative',
    },
    petStatusTextWrapper:{
        position:'absolute',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 48,
        gap: 8,
    },
    petStatusTitle: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1a1a1a',
    },
    petHeartRateText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 56,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1a1a1a',
    },
    bpmText:{
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1F5FFF',
    },
    petStatusReportContainer: {
        display: 'flex',
        backgroundColor: '#E4E4E4',
        paddingHorizontal: 24,
    },
    petStatusReportHeader:{
        marginTop: 32,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    petStatusReportTitle:{
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    petStatusReportDescription:{
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#b3b3b3',
    },
    reportContainer: {
        marginTop: 16,
        marginBottom: 33,
        display: 'flex',
        gap: 16,
    },
})

export default HealthReportDetailScreen;