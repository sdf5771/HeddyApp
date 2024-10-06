import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ArrowLeft from '../../assets/svgs/atoms/arrow_left.svg';

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
                <ArrowLeft width={24} height={24} />
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
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
})

export default StackPopHeaderTitle;