import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ArrowLeftBlue } from '../../assets/svgs/atoms';

type Tprops = {
    navigation: any
    text: string;
}

function StackPopHeaderTitle({navigation, text}: Tprops){

    return (
        <Pressable
            onPress={() => {
                navigation.pop()
            }}>
            <View style={styles.textWrapper}>
                <ArrowLeftBlue width={24} height={24} />
                <Text style={styles.text}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    textWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 20,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
    },
})

export default StackPopHeaderTitle;