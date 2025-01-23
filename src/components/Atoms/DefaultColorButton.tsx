import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

type Tprops = {
    text: string;
    onPressHandler: () => void;
}

function DefaultColorButton({text, onPressHandler}: Tprops){

    return (
        <TouchableOpacity onPress={onPressHandler}>
            <View style={styles.rootContainer}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: '#F4F4F4',
        height: 48,
    },
    buttonText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: '700',
        color: '#4D4D4D',
    },
})

export default DefaultColorButton;