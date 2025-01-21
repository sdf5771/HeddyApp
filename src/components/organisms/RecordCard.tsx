import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { ArrowDownBlack } from '../../assets/svgs/atoms';

type Tprops = {
    isEmptyView: boolean;
    writeButtonOnPress?: () => void;
    date: string;
    dayOfTheWeek: string;
}

const DEFAULT_HEIGHT = 50;
const EXPANDED_HEIGHT = 431;

function RecordCard({isEmptyView, writeButtonOnPress, date, dayOfTheWeek}: Tprops){
    const [isExpanded, setIsExpanded] = useState(false);
    const [rotateAnim] = useState(new Animated.Value(0));

    // 회전 애니메이션 함수
    const rotate = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    });
    return (
        <Animated.View style={styles.recordCardContainer}>
            {isEmptyView ? 
            <View style={styles.recordCardHeader}>
                <Text style={styles.recordCardHeaderDateText}>{date}.{dayOfTheWeek}</Text>
                <TouchableOpacity onPress={writeButtonOnPress}>
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
                                Animated.timing(rotateAnim, {
                                    toValue: isExpanded ? 0 : 1,
                                    duration: 300,
                                    useNativeDriver: true
                                }).start();
                            }}>
                            <Animated.View style={{ transform: [{ rotate }] }}>
                                <ArrowDownBlack />
                            </Animated.View>
                        </TouchableOpacity>
                    </View>
                </View>
                {isExpanded ? 
                <View style={styles.recordCardBody}>
                    <View style={styles.recordCardBodyTextContainer}>
                        <Text style={styles.recordCardBodyText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                    </View>
                    <View style={styles.recordCardBodyImageContainer}>
                        <View style={styles.recordCardBodyImage}>

                        </View>
                        <View style={styles.recordCardBodyImage}>

                        </View>
                        <View style={styles.recordCardBodyImage}>

                        </View>
                        <View style={styles.recordCardBodyImage}>

                        </View>
                        <View style={styles.recordCardBodyImage}>

                        </View>
                        <View style={styles.recordCardBodyImage}>

                        </View>
                    </View>
                    <View style={styles.recordCardBodyButtonContainer}>
                        <TouchableOpacity>
                            <View style={styles.recordCardBodyButton}>
                                <Text style={styles.recordCardBodyButtonText}>상세보기</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View> 
                : null}
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
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
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
    recordCardBodyTextContainer: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    recordCardBodyText: {
        fontFamily: 'NanumSquareRoundR',
        fontSize: 12,
        fontWeight: '400',
        color: '#808080',
    },
    recordCardBodyImageContainer: {
        marginTop: 16,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    recordCardBodyImage: {
        width: 88,
        height: 88,
        backgroundColor: '#F4F4F4',
        borderRadius: 8,
    },
    recordCardBodyButtonContainer: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    recordCardBodyButton: {
        width: 280,
        height: 40,
        backgroundColor: '#F4F4F4',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recordCardBodyButtonText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: '900',
        color: '#4D4D4D',
    },
});

export default RecordCard;