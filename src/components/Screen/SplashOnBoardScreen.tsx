import React from 'react';
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

import Swiper from 'react-native-swiper';

import { SlideOne, SlideTwo, SlideThree, SlideFour } from '../../assets/svgs/SplashOnBoardScreen';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

function SplashOnBoardScreen({navigation}){

    return (
        <SafeAreaView style={styles.rootContainer}>
            {/* <ScrollView style={{width: deviceWidth, height: deviceHeight}}> */}
                <View style={styles.carouselContainer}>
                    <Swiper 
                        autoplay 
                        style={styles.swiperSection}
                        paginationStyle={{ position: "absolute", top: 45, bottom: undefined }}>
                        <View style={styles.slideWrapper}>
                            <Text style={styles.onBoardTitle}>
                                혼자 남겨진 내 친구, {"\n"}
                                괜찮은가 걱정되시죠?
                            </Text>
                            <View style={styles.onBoardImage}>
                                <SlideOne width={312} height={231} />
                            </View>
                        </View>
                        <View style={styles.slideWrapper}>
                            <Text style={styles.onBoardTitle}>
                                내 친구의 건강상태를 {"\n"}
                                24시간 케어 해보세요.
                            </Text>
                            <View style={styles.onBoardImage}>
                                <SlideTwo width={312} height={260} />
                            </View>
                        </View>
                        <View style={styles.slideWrapper}>
                            <Text style={styles.onBoardTitle}>
                                HEDDY Band로 {"\n"}
                                건강상태를 실시간으로 확인해요!
                            </Text>
                            <View style={styles.onBoardImage}>
                                <SlideThree width={312} height={231} />
                            </View>
                        </View>
                        <View style={styles.slideWrapper}>
                            <Text style={styles.onBoardTitle}>
                                HEDDY와 함께 내 친구와 {"\n"}
                                행복한 라이프를 시작해볼까요?
                            </Text>
                            <View style={styles.onBoardImage}>
                                <SlideFour width={312} height={264} />
                            </View>
                        </View>
                    </Swiper>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <View style={styles.onBoardButtonPressable}>
                            <Text style={styles.buttonPressableText}>Heddy 시작하기!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    carouselContainer: {
        backgroundColor: '#ffffff',
        width: deviceWidth, height: deviceHeight,
    },
    swiperSection: {
        height: 465,
    },
    slideWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 54,
    },
    onBoardTitle: {
        marginTop: 79,
        textAlign: 'center',
        paddingHorizontal: 24,
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1A1A1A',
        lineHeight: 34,
    },
    onBoardImage:{
        
    },
    btnContainer: {
        position: 'absolute',
        paddingHorizontal: 24,
        bottom: 80,
    },
    onBoardButtonPressable: {
        
        // marginTop: 137,
        width: deviceWidth - 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        height: 48,
        backgroundColor: '#1F5FFF',
    },
    buttonPressableText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
    },
})

export default SplashOnBoardScreen;