import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';

function HistoryCardWriteScreen(){
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View>
                <Text>HistoryCardWriteScreen</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});

export default HistoryCardWriteScreen;
