import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { ArrowLeftGray } from '../../assets/svgs/atoms';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

function HealthReportDetailScreen(navigation){

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <TouchableOpacity>
                        <View style={styles.prevNavigateBtn}>
                            <ArrowLeftGray />
                            <Text>뒤로가기</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabContainer}>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
    },
    prevNavigateBtn: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
    },
    tabContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
})

export default HealthReportDetailScreen;