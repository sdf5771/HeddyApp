import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

function LineChartComponent(){
    const data = [
        {value: 15, label: '00:00'},
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
            <LineChart
                data={data}
                height={383}
                showVerticalLines
                // spacing={44}
                // initialSpacing={0}
                rulesColor="#F4F4F4"
                // hideAxesAndRules
                xAxisColor="#F4F4F4"
                yAxisColor="#F4F4F4"
                // hideYAxisText
                yAxisTextStyle={{color: '#E4E4E4'}}
                xAxisLabelTextStyle={{color: '#808080'}}
                color1="#1F5FFF"
                textColor1="#1F5FFF"
                dataPointsHeight={4}
                dataPointsWidth={4}
                dataPointsColor1="blue"
                textFontSize={13}
                verticalLinesColor="#F4F4F4"
            />
        </View>
    )
}

export default LineChartComponent;
