import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Tprops = {
    number: number;
    title: string;
    description: string;
}

const CoachMarkMessageBox = ({ number, title, description }: Tprops) => {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.titleContainer}>
                <View style={styles.numberContainer}>
                    <Text style={styles.numberText}>{number}</Text>
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 16,
        gap: 16,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    titleWrapper: {
        flex: 1,
    },
    titleText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: '900',
        color: '#1A1A1A',
    },
    numberContainer: {
        backgroundColor: '#1F5FFF',
        borderRadius: 20,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 12,
        fontWeight: '900',
        color: '#ffffff',
    },
    descriptionContainer: {
        display: 'flex',
    },
    descriptionText: {
        fontFamily: 'NanumSquareRoundR',
        fontSize: 12,
        fontWeight: '400',
        color: '#4D4D4D',
        lineHeight: 18,
    },
});

export default CoachMarkMessageBox;