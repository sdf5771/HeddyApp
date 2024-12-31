import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

function CompareLineChartComponent(){
    const data = [
        {value: 15, label: '일'},
        {value: 30, label: '월'},
        {value: 25, label: '화'},
        {value: 40, label: '수'},
        {value: 35, label: '목'},
        {value: 45, label: '금'},
        {value: 38, label: '토'},
    ];

    const data2 = [
        {value: 10, label: '일'}, // 데이터2의 값 수정
        {value: 20, label: '월'},
        {value: 30, label: '화'},
        {value: 50, label: '수'},
        {value: 40, label: '목'},
        {value: 60, label: '금'},
        {value: 55, label: '토'},
    ];

    return (
        <View>
            <LineChart
                data={data}
                data2={data2}
                height={383}
                // showVerticalLines
                // spacing={44}
                // initialSpacing={0}
                rulesColor="#F4F4F4"
                // hideAxesAndRules
                xAxisColor="#F4F4F4"
                yAxisColor="#F4F4F4"
                // hideYAxisText
                rulesType="solid"
                yAxisTextStyle={{color: '#E4E4E4'}}
                xAxisLabelTextStyle={{color: '#808080'}}
                color1="#1F5FFF"
                textColor1="#1F5FFF"
                color2="#B3B3B3"
                textColor2="#B3B3B3"
                dataPointsHeight={4}
                dataPointsWidth={4}
                dataPointsColor1="#1F5FFF"
                dataPointsColor2="#B3B3B3"
                textFontSize={13}
                verticalLinesColor="#F4F4F4"
            />
        </View>
    )
}

export default CompareLineChartComponent;
