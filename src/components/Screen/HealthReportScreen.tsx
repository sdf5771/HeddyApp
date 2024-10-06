import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';


function HealthReportScreen({navigation}){

    return (
        <SafeAreaView>
            <View>
                <Text>HealthReportScreen</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.push('petListScreen')}>
                    <Text>반려동물 리스트</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HealthReportScreen;