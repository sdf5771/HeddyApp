import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PetAvatarDefaultLogo } from '../../assets/svgs/atoms';

type Tprops = {
    isActive: boolean
}

function PetListElement({isActive}: Tprops){

    return (
        <TouchableOpacity>
            <View style={isActive ? styles.rootContainerActive : styles.rootContainerDefault}>
                <View>
                    <PetAvatarDefaultLogo width={32} height={32} />
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.titleContainer}>
                        {isActive ? <Text style={styles.activeText}>현재 선택된 친구</Text> : null}
                        <Text style={styles.title}>반려동물이름</Text>
                    </View>
                    <Text style={styles.betteryText}>-%</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    rootContainerDefault: {
        marginTop: 16,
        height: 62,
        borderRadius: 16,
        padding: 16,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#E4E4E4',
        display: 'flex',
        flexDirection: 'row',
    },
    rootContainerActive: {
        marginTop: 16,
        height: 62,
        borderRadius: 16,
        padding: 16,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#1F5FFF',
        display: 'flex',
        flexDirection: 'row',
    },
    textContainer: {
        flex: 1,
        marginLeft: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleContainer:{
        display: 'flex',
    },
    activeText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 10,
        fontWeight: '700',
        color: '#1F5FFF',
    },
    title: {
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        fontWeight: '700',
        color: '#1A1A1A',
    },
    betteryText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        color: '#1F5FFF',
    }
})

export default PetListElement;