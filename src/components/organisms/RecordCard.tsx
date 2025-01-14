import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';

type Tprops = {
    isEmptyView: boolean;
    onPress?: () => void;
    date: string;
    dayOfTheWeek: string;
}

const DEFAULT_HEIGHT = 50;
const EXPANDED_HEIGHT = 431;

function RecordCard({isEmptyView, onPress, date, dayOfTheWeek}: Tprops){
    const [isExpanded, setIsExpanded] = useState(false);
    const animatedHeight = useRef(new Animated.Value(DEFAULT_HEIGHT)).current;
    return (
        <Animated.View style={[styles.recordCardContainer, {height: animatedHeight}]}>
            {isEmptyView ? 
            <View style={styles.recordCardHeader}>
                <Text style={styles.recordCardHeaderDateText}>{date}.{dayOfTheWeek}</Text>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.writeButton}>
                        <Text style={styles.writeButtonText}>작성하기</Text>
                    </View>
                </TouchableOpacity>
            </View> 
            : 
            <>
                <View style={styles.recordCardHeader}>
                    <Text style={styles.recordCardHeaderDateText}>{date}.{dayOfTheWeek}</Text>
                    <View style={styles.recordCardHeaderStatusContainer}>
                        <Text style={styles.defaultStatusText}>사료</Text>
                        <Text style={styles.defaultStatusText}>급수</Text>
                        <Text style={styles.activeStatusText}>배변</Text>
                        <Text style={styles.defaultStatusText}>피부</Text>
                        <Text style={styles.activeStatusText}>기타</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {
                            setIsExpanded(!isExpanded);
                            Animated.timing(animatedHeight, {
                                toValue: isExpanded ? DEFAULT_HEIGHT : EXPANDED_HEIGHT,
                                duration: 300,
                                useNativeDriver: false,
                            }).start();
                        }}>
                            <Text>데이터 추가하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {isExpanded ? <View style={styles.recordCardBody}>
                    <Text>데이터 추가하기</Text>
                </View> : null}
            </>
            }
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    recordCardContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 16,
    },
    recordCardHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    recordCardBody: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    recordCardHeaderDateText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: '900',
        color: '#1A1A1A',
    },
    recordCardHeaderStatusContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    writeButton: {
        width: 56,
        height: 28,
        backgroundColor: '#F4F4F4',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    writeButtonText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 10,
        fontWeight: '900',
        color: '#4D4D4D',
    },
    defaultStatusText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 12,
        fontWeight: '900',
        color: '#E4E4E4',
    },
    activeStatusText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 12,
        fontWeight: '700',
        color: '#FF5A19',
    },
});

export default RecordCard;