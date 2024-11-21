import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WarningLogo } from '../../assets/svgs/atoms';

type Tprops = {
    text: string;
}

function ErrorMessageBox({text}: Tprops){

    return (
        <View style={styles.rootContainer}>
            <View>
                <WarningLogo />
            </View>
            <Text style={styles.errorText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        borderRadius: 12,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 16,
        gap: 8,
    },
    errorText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 12,
        fontWeight: '700',
        color: '#FF5252',
    },
})

export default ErrorMessageBox;