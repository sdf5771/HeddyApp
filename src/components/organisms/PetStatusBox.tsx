import React from 'react';
import { Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import PetAvatarDefault from '../../assets/svgs/atoms/petAvatarDefault.svg';
import BluetoothLogo from '../../assets/svgs/atoms/bluetooth.svg';

type Tprops = {
    name: string,
    age: string,
    weight: string,
    petImg?: string,
    isCompareDevice: boolean,
    deviceOption?: {
        name: string,
        battery: string,
    },
}

function PetStatusBox({name, age, weight, petImg, isCompareDevice, deviceOption}: Tprops){

    return(
        <Pressable>
            <View style={styles.petStatusBoxRoot}>
                <View style={styles.headerContainer}>
                    <View>
                        {
                            petImg ?
                            <View>

                            </View>
                            :
                            <PetAvatarDefault width={40} height={40} />
                        }
                    </View>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.petNameText}>{name}</Text>
                        <Text style={styles.petStateText}>{age}살 / {weight}kg</Text>
                    </View>
                </View>

                {
                    isCompareDevice ? 
                    <TouchableOpacity>
                        <View style={styles.compareBluetoothDeviceContainer}>
                        
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity>
                        <View style={styles.notCompareBluetoothDeviceContainer}>
                            <BluetoothLogo width={16} height={16} />
                            <Text style={styles.notCompareText}>블루투스 기기 등록하기</Text>
                        </View>
                    </TouchableOpacity>
                }
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    petStatusBoxRoot: {
        backgroundColor: '#f4f4f4',
        borderRadius: 16,
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },
    headerTextContainer: {
        gap: 4,
    },
    petNameText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: '700',
        color: '#1a1a1a',
    },
    petStateText: {
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        fontWeight: '700',
        color: '#4d4d4d',
    },

    compareBluetoothDeviceContainer: {
        marginTop: 16,
    },

    notCompareBluetoothDeviceContainer: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        borderRadius: 8,
    },
    notCompareText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 10,
        fontWeight: '700',
        color: '#808080',
        textAlign: 'center',
    }
})

export default PetStatusBox;