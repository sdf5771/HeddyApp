import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
function BarChartComponent(){
    const data = [
        {value: 15, label: '00:00', topLabelComponent: () => <Text style={styles.labelText}>15</Text>},
        {value: 30, label: '01:00'},
        {value: 25, label: '02:00'},
        {value: 40, label: '03:00'},
        {value: 35, label: '04:00'},
        {value: 45, label: '05:00'},
        {value: 38, label: '06:00'},
        {value: 42, label: '07:00'},
        {value: 55, label: '08:00'},
        {value: 48, label: '09:00'},
        {value: 50, label: '10:00'},
        {value: 47, label: '11:00'},
        {value: 52, label: '12:00'},
        {value: 58, label: '13:00'},
        {value: 63, label: '14:00'},
        {value: 60, label: '15:00'},
        {value: 55, label: '16:00'},
        {value: 45, label: '17:00'},
        {value: 40, label: '18:00'},
        {value: 35, label: '19:00'},
        {value: 30, label: '20:00'},
        {value: 25, label: '21:00'},
        {value: 20, label: '22:00'},
        {value: 18, label: '23:00'},
        {value: 15, label: '24:00'},
    ];
    return (
        <View>
            <BarChart
                data={data}
                barWidth={24}
                height={383}
                barBorderRadius={2}
                hideAxesAndRules
                hideYAxisText
                frontColor="#1F5FFF"
                />
        </View>
    );
}

const styles = StyleSheet.create({
    labelText: {color: '#1F5FFF', fontSize: 16, marginBottom: 6, fontWeight: '700', fontFamily: 'NanumSquareRoundEB'},
});

export default BarChartComponent;
