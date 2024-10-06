import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { StackPopHeaderTitle } from '../Atoms';

function PetListScreen({navigation}){

    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <StackPopHeaderTitle navigation={navigation} text={'사용자 이름의 친구'} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {

    },
    headerContainer: {
        marginTop: 24,
    }
})

export default PetListScreen;