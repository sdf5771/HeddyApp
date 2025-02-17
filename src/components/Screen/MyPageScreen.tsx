import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import { UserAvatarEmpty } from '../../assets/svgs/atoms';
import { PetAvatarDefaultLogo, AddGrey700 } from '../../assets/svgs/atoms';
import { ArrowRightGray } from '../../assets/svgs/atoms';

const DUMP_FRIEND_LIST = [
    {
        petImage: null,
        name: '반려동물이름',
        isConnected: true,
        deviceInfo: {
            name: 'HEDDY BAND',
        },
    },
    {
        petImage: null,
        name: '반려동물이름2',
        isConnected: false,
    },
]

type FriendElementProps = {
    petImage: string | null;
    name: string;
    isConnected: boolean;
    deviceInfo?: {
        name: string;
    }
}

function FriendElement({petImage, name, isConnected, deviceInfo}: FriendElementProps){
    return (
        <TouchableOpacity>
            <View style={styles.friendElementContainer}>
                <View style={styles.friendElementAvatarContainer}>
                    {
                        petImage ? (
                            <Image source={{ uri: petImage }} style={styles.friendElementAvatarImage} />
                        ) : (
                            <PetAvatarDefaultLogo width={48} height={48} />
                        )
                    }
                </View>
                <View style={styles.friendElementTextContainer}>
                    <Text style={styles.friendElementText}>친구 이름</Text>
                    <View style={[styles.friendElementTextWrapper, isConnected ? styles.friendElementTextWrapperConnected : styles.friendElementTextWrapperDisconnected]}>
                        <Text 
                            style={isConnected ? styles.friendElementTextConnected : styles.friendElementTextDisconnected}
                        >{deviceInfo ? deviceInfo.name : '블루투스 미등록'}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

function MyPageScreen(){
    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView>
                <View style={styles.userInfoContainer}>
                    <View style={styles.userInfoRoot}>
                        <View style={styles.userInfoAvatarContainer}>
                            <UserAvatarEmpty />
                        </View>
                        <View style={styles.userInfoTextContainer}>
                            <View style={styles.userInfoTextWrapper}>
                                <Text style={styles.userNameText}>사용자 이름</Text>
                                <Text style={styles.userAccountText}>heddy@heddy.com</Text>
                            </View>
                            <View style={styles.userInfoTextWrapper}>
                                <TouchableOpacity>
                                    <Text style={styles.userEditButtonText}>편집하기</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.friendListContainer}>
                    <View style={styles.friendListTitleContainer}>
                        <Text style={styles.titleText}>내 친구 현황</Text>
                        <Text style={styles.friendListSubTitleText}>함께하는 친구 2마리</Text>
                    </View>
                    <View style={styles.friendList}>
                        <FlatList
                            horizontal={true}
                            data={DUMP_FRIEND_LIST}
                            contentContainerStyle={{gap: 16}}
                            renderItem={
                                ({ item }) => (
                                    <FriendElement {...item} />
                                )
                            }
                            ListFooterComponent={
                                <TouchableOpacity>
                                    <View style={styles.createNewFriendContainer}>
                                        <View style={styles.createNewFriendLogoContainer}>
                                            <AddGrey700 />
                                        </View>
                                        <Text style={styles.createNewFriendText}>새 친구 추가</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    </View>
                </View>

                <View style={styles.settingContainer}>
                    <View style={styles.settingTitleContainer}>
                        <Text style={styles.titleText}>설정</Text>
                    </View>
                    <View style={styles.settingListContainer}>
                        <TouchableOpacity>
                            <View style={styles.settingItemContainer}>
                                <Text style={styles.settingItemText}>버전 정보</Text>
                                <Text style={styles.settingItemVersionText}>v 1.0.0</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.settingItemContainer}>
                                <Text style={styles.settingItemText}>이용약관</Text>
                                <ArrowRightGray />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.settingItemContainer}>
                                <Text style={styles.settingItemText}>개인정보 처리방침</Text>
                                <ArrowRightGray />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.settingItemContainer}>
                                <Text style={styles.settingItemText}>마케팅 정보 수신 및 개인정보 제공 방침</Text>
                                <ArrowRightGray />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.settingItemContainer}>
                                <Text style={styles.settingItemText}>위치기반 서비스 이용약관</Text>
                                <ArrowRightGray />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.settingItemContainer}>
                                <Text style={styles.settingItemText}>로그아웃</Text>
                                <View />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textContainerGrayText}>고객문의</Text>
                    <View style={styles.textContainerGrayTextWrapper}>
                        <Text style={styles.textContainerGrayText}>이메일</Text>
                        <View style={styles.verticalLine} />
                        <Text style={styles.textContainerGrayText}>heddy@heddy.com</Text>
                    </View>
                    <View style={styles.textContainerGrayTextWrapper}>
                        <Text style={styles.textContainerGrayText}>유선문의</Text>
                        <View style={styles.verticalLine} />
                        <Text style={styles.textContainerGrayText}>000-0000-0000</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.textContainerGrayUnderlineText}>회원 탈퇴</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#F4F4F4',
    },
    userInfoContainer: {
        paddingHorizontal: 24,
        marginTop: 24,
    },
    userInfoRoot: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        borderRadius: 16,
        backgroundColor: '#ffffff',
        padding: 16,
    },
    userInfoAvatarContainer: {
        width: 40,
        height: 40,
        marginRight: 12,
    },
    userInfoTextContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userInfoTextWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    userNameText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 18,
        color: '#000000',
    },
    userAccountText: {
        marginTop: 2,
        fontFamily: 'NanumSquareRoundR',
        fontSize: 12,
        color: '#808080',
    },
    userEditButtonText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: '900' as const,
        color: '#808080',
        textDecorationLine: 'underline',
    },
    friendListContainer: {
        paddingHorizontal: 24,
        marginTop: 32,
    },
    friendListTitleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 18,
        color: '#1a1a1a',
    },
    friendListSubTitleText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 12,
        color: '#1F5FFF',
    },
    friendList: {
        marginTop: 16,
    },
    settingContainer: {
        paddingHorizontal: 24,
        marginTop: 32,
    },
    settingTitleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    settingListContainer: {
        marginTop: 16,
        width: '100%',
        height: 334 + 8 + 8,
        borderRadius: 16,
        backgroundColor: '#ffffff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingItemContainer:{
        width: '100%',
        height: 56,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flexStartContainer: {
        justifyContent: 'flex-start',
    },
    settingItemText: {
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        color: '#4D4D4D',
    },
    settingItemVersionText: {
        fontFamily: 'NanumSquareRound',
        fontSize: 12,
        color: '#808080',
    },
    friendElementContainer: {
        display: 'flex',
        width: 120,
        height: 140,
        borderRadius: 16,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    friendElementAvatarContainer: {
        width: 48,
        height: 48,
        borderRadius: '50%',
    },
    friendElementAvatarImage: {
        width: 48,
        height: 48,
        borderRadius: '50%',
    },
    friendElementTextContainer: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    friendElementTextWrapper: {
        marginTop: 8,
    },
    createNewFriendContainer: {
        display: 'flex',
        width: 120,
        height: 140,
        borderRadius: 16,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    createNewFriendLogoContainer: {
        width: 24,
        height: 24,
    },
    createNewFriendText: {
        marginTop: 16,
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        color: '#808080',
    },
    friendElementTextWrapperConnected: {
        backgroundColor: '#EFF5FF',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 3,
    },
    friendElementTextWrapperDisconnected: {
        backgroundColor: '#F4F4F4',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 3,
    },
    friendElementTextConnected: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 10,
        color: '#1F5FFF',
    },
    friendElementTextDisconnected: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 10,
        color: '#808080',
    },
    friendElementText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        color: '#1a1a1a',
    },
    textContainer: {
        paddingHorizontal: 24,
        marginTop: 32,
    },
    textContainerGrayText: {
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        color: '#B3B3B3',
    },
    textContainerGrayUnderlineText: {
        marginTop: 40,
        marginBottom: 100,
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        color: '#B3B3B3',
        textDecorationLine: 'underline',
    },
    verticalLine: {
        width: 1,
        height: 16.5,
        backgroundColor: '#E4E4E4',
        marginHorizontal: 8,
    },
    textContainerGrayTextWrapper: {
        marginTop: 11,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default MyPageScreen;
