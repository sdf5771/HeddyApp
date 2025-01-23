import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
function CompareBarChartComponent(){
    const data = [
        {
            value: 0,
            label: '1주차',
            spacing: 2,
            labelWidth: 50,
            labelTextStyle: {color: '#1A1A1A', textAlign: 'center', fontSize: 16, fontWeight: '900', fontFamily: 'NanumSquareRoundEB'},
            frontColor: '#1F5FFF',
            topLabelComponent: () => <Text style={styles.labelPrimaryText}>0</Text>
        },
        {value: 0, frontColor: '#A5C6FF', topLabelComponent: () => <Text style={styles.labelSecondaryText}>0</Text>},
        {
            value: 88,
            label: '2주차',
            spacing: 2,
            labelWidth: 40,
            labelTextStyle: {color: '#1A1A1A', fontSize: 16, fontWeight: '900', fontFamily: 'NanumSquareRoundEB'},
            frontColor: '#1F5FFF',
            topLabelComponent: () => <Text style={styles.labelPrimaryText}>88</Text>
        },
        {value: 81, frontColor: '#A5C6FF', topLabelComponent: () => <Text style={styles.labelSecondaryText}>81</Text>},
        {
            value: 160,
            label: '3주차',
            spacing: 2,
            labelWidth: 40,
            labelTextStyle: {color: '#1A1A1A', fontSize: 16, fontWeight: '900', fontFamily: 'NanumSquareRoundEB'},
            frontColor: '#1F5FFF',
            topLabelComponent: () => <Text style={styles.labelPrimaryText}>160</Text>
        },
        {value: 60, frontColor: '#A5C6FF', topLabelComponent: () => <Text style={styles.labelSecondaryText}>60</Text>},
        {
            value: 30,
            label: '4주차',
            spacing: 2,
            labelWidth: 40,
            labelTextStyle: {color: '#1A1A1A', fontSize: 16, fontWeight: '900', fontFamily: 'NanumSquareRoundEB'},
            frontColor: '#1F5FFF',
            topLabelComponent: () => <Text style={styles.labelPrimaryText}>30</Text>
        },
        {value: 10, frontColor: '#A5C6FF', topLabelComponent: () => <Text style={styles.labelSecondaryText}>30</Text>},
        {
            value: 30,
            label: '5주차',
            spacing: 2,
            labelWidth: 40,
            labelTextStyle: {color: '#1A1A1A', fontSize: 16, fontWeight: '900', fontFamily: 'NanumSquareRoundEB'},
            frontColor: '#1F5FFF',
            topLabelComponent: () => <Text style={styles.labelPrimaryText}>30</Text>
        },
        {value: 10, frontColor: '#A5C6FF', topLabelComponent: () => <Text style={styles.labelSecondaryText}>30</Text>},
    ];
    return (
        <View>
            <BarChart
                data={data}
                barWidth={24}
                height={383}
                barBorderRadius={2}
                rulesColor="#e4e4e4"
                rulesType='solid'
                yAxisColor="#e4e4e4"
                yAxisTextStyle={{color: '#999999'}}
                xAxisColor="#e4e4e4"
                xAxisLabelTextStyle={{color: '#999999'}}
                frontColor="#1F5FFF"
                />
        </View>
    );
}

const styles = StyleSheet.create({
    labelPrimaryText: {color: '#1F5FFF', fontSize: 16, marginBottom: 6, fontWeight: '700', fontFamily: 'NanumSquareRoundEB'},
    labelSecondaryText: {color: '#A5C6FF', fontSize: 16, marginBottom: 6, fontWeight: '700', fontFamily: 'NanumSquareRoundEB'},
});

export default CompareBarChartComponent;
