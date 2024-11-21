import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';

type Tprops = {
    LogoComponent: React.FC<SvgProps>;
    title: string;
    timeInfo: string;
    buttonOption?:{
        text: string;
        btnPressHandler: () => void;
    }
}

function HeartRateReportElement({LogoComponent, title, timeInfo, buttonOption}:Tprops){

    return (
        <View style={styles.heartRateReportRoot}>
            <View style={styles.headerContainer}>
                <View style={styles.titleContainer}>
                    <LogoComponent />
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.timeText}>{timeInfo}</Text>
                </View>
                {
                    buttonOption ?
                    <TouchableOpacity onPress={buttonOption.btnPressHandler}>
                        <View>
                            <Text>{buttonOption.text}</Text>
                        </View>
                    </TouchableOpacity>
                    : null
                }
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.verticalSection}>
                    <View style={styles.dataElement}>
                        <Text style={styles.dataTitleText}>심박수 범위</Text>
                        <Text style={styles.dataText}>33~200</Text>
                    </View>
                    <View style={styles.dataElement}>
                        <Text style={styles.dataTitleText}>심박수 평균</Text>
                        <Text style={styles.dataText}>107</Text>
                    </View>
                </View>
                <View style={styles.verticalLine}></View>
                <View style={styles.verticalSection}>
                    <View style={styles.dataElement}>
                        <Text style={styles.dataTitleText}>최고 심박수</Text>
                        <Text style={styles.dataText}>200</Text>
                    </View>
                    <View style={styles.dataElement}>
                        <Text style={styles.dataTitleText}>최고 시간</Text>
                        <Text style={styles.dataText}>13:00</Text>
                    </View>
                </View>
                <View style={styles.verticalLine}></View>
                <View style={styles.verticalSection}>
                    <View style={styles.dataElement}>
                        <Text style={styles.dataTitleText}>최저 심박수</Text>
                        <Text style={styles.dataText}>33</Text>
                    </View>
                    <View style={styles.dataElement}>
                        <Text style={styles.dataTitleText}>최저 시간</Text>
                        <Text style={styles.dataText}>08:00</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heartRateReportRoot: {
        display: 'flex',
        padding: 16,
        gap: 16,
        backgroundColor: '#fff',
        borderRadius: 16,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        marginLeft: 4,
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: '700',
        color: '#1A1A1A',
    },
    timeText: {
        marginLeft: 8,
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        fontWeight: '700',
        color: '#808080',
    },
    verticalSection:{
        display: 'flex',
        gap: 16,
    },
    verticalLine:{
        marginHorizontal: 8,
        width: 1,
        height: 90,
        backgroundColor: '#E4E4E4',
    },
    dataContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dataElement: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    dataTitleText:{
        color: '#B3B3B3',
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        fontWeight: '700',
    },
    dataText:{
        color: '#1A1A1A',
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: '700',
    },
})

export default HeartRateReportElement;