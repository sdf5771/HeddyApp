import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StackPopHeaderTitle } from '../Atoms';
import { useRoute } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { EmptyImage } from '../../assets/svgs/atoms';
import { launchImageLibrary } from 'react-native-image-picker';

function RecordWriteScreen({navigation}: {navigation: any}){
    const route = useRoute();
    const {day, dayOfTheWeek, month} = route.params;

    const attachImageOnPressHandler = () => {
        const options = {
            mediaType: 'photo', // 사진만 선택
            includeBase64: false, // Base64 포함 여부
        };
    
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('사용자가 갤러리 선택을 취소했습니다.');
            } else if (response.error) {
                console.log('이미지 선택 중 오류 발생:', response.error);
            } else {
                console.log('선택한 이미지:', response.assets[0]);
            }
        });
    };

    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <StackPopHeaderTitle navigation={navigation} text={`${month}.${day}.${dayOfTheWeek} 기록카드 작성`} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.recordBody}>
                <View style={styles.problemContainer}>
                    <View style={styles.problemTitleContainer}>
                        <Text style={styles.titleText}>이상증상</Text>
                        <Text style={styles.descriptionText}>오늘 친구에게 있었던 문제를 모두 골라주세요.</Text>
                    </View>
                    <View style={styles.problemListContainer}>
                        <TouchableOpacity>
                            <View style={styles.problemElement}>
                                <Text style={styles.problemElementText}>사료</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.problemElement}>
                                <Text style={styles.problemElementText}>급수</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.problemElement}>
                                <Text style={styles.problemElementText}>배변</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.problemElement}>
                                <Text style={styles.problemElementText}>피부</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.problemElement}>
                                <Text style={styles.problemElementText}>기타</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.recordContainer}>
                    <View style={styles.recordTitleContainer}>
                        <Text style={styles.titleText}>수기기록</Text>
                    </View>
                    <View style={styles.recordInputContainer}>
                        <TextInput
                            style={styles.recordInput}
                            placeholder="내 친구에게 오늘 무슨일이 있었는지 작성해주세요!"
                            multiline={true}
                            numberOfLines={10}
                        />
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <View style={styles.imageTitleContainer}>
                        <Text style={styles.titleText}>사진기록</Text>
                    </View>
                    <View style={styles.imageListContainer}>
                        <TouchableOpacity onPress={attachImageOnPressHandler}>
                            <View style={styles.imageElement}>
                                <EmptyImage />
                                <Text style={styles.imageElementText}>0/6</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        marginTop: 16,
        paddingHorizontal: 24,
    },
    recordBody: {
        marginTop: 32,
        flex: 1,
        display: 'flex',
        paddingHorizontal: 24,
    },
    problemContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },
    problemTitleContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: '900',
        color: '#000000',
    },
    descriptionText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 10,
        fontWeight: '900',
        color: '#B3B3B3',
    },
    problemListContainer: {
        marginTop: 12,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
    problemElement: {
        borderRadius: 16,
        backgroundColor: '#F4F4F4',
        padding: 12,
    },
    problemElementText: {
        fontFamily: 'NanumSquareRoundR',
        fontSize: 12,
        color: '#000000',
    },
    recordContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },
    recordTitleContainer: {
        marginTop: 18,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    recordInputContainer: {
        marginTop: 12,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
    },
    recordInput: {
        width: '100%',
        height: 312,
        borderRadius: 16,
        backgroundColor: '#ffffff',
        padding: 12,
        borderWidth: 1,
        borderColor: '#E4E4E4',
        fontFamily: 'NanumSquareRoundR',
        fontSize: 14,
        color: '#000000',
    },
    imageContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },
    imageTitleContainer: {
        marginTop: 15,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageListContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
    imageElement: {
        width: 82,
        height: 82,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#E4E4E4',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7,
    },
    imageElementText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 12,
        fontWeight: '900',
        color: '#808080',
    },
    imageInput: {
        width: '100%',
        height: 100,
        borderRadius: 16,
        backgroundColor: '#F4F4F4',
        padding: 12,
    },
});

export default RecordWriteScreen;