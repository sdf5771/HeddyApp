import React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackPopHeaderTitle } from '../Atoms';
import AddLogo from '../../assets/svgs/PetListScreen/add.svg';
import { PetStatusBox } from '../organisms';

function PetListScreen({navigation}){

    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView style={styles.rootScrollView}>
                <View style={styles.headerContainer}>
                    <StackPopHeaderTitle navigation={navigation} text={'사용자 이름의 친구'} />
                </View>
                <View style={styles.petListWrapper}>
                    <PetStatusBox name={'반려동물이름'} age={'9'} weight='6' isCompareDevice={false} />
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => navigation.push('registPetScreen')}>
                        <View style={styles.newPetBtn}>
                            <AddLogo width={16} height={16} />
                            <Text style={styles.newPetBtnText}>새 친구 등록하기</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    rootScrollView: {
        paddingHorizontal: 24,
    },
    headerContainer: {
        marginTop: 24,
    },
    petListWrapper: {
        marginTop: 24,
        gap: 16,
    },
    btnContainer: {

    },
    newPetBtn: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        gap: 4,
        backgroundColor: '#f4f4f4',
        borderRadius: 16,
    },
    newPetBtnText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D4D4D',
        textAlign: 'center',
    },
})

export default PetListScreen;