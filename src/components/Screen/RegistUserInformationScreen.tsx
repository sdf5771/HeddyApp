import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { StackPopHeaderTitle } from '../Atoms';
import { useNavigation } from '@react-navigation/native';

function RegistUserInformationScreen(){
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <StackPopHeaderTitle navigation={navigation} text={'이메일 회원가입'} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {

    },
    headerContainer:{

    },

})

export default RegistUserInformationScreen;