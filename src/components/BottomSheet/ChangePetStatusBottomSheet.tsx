import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { ModalClose, CrossBlack } from '../../assets/svgs/atoms';
import { PetListElement } from '../Atoms';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

type Tprops = {
  isVisible: boolean;
  toggleModal: () => void;
}

function ChangePetStatusBottomSheet({isVisible, toggleModal}: Tprops){

  return (
    <Modal
        isVisible={isVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}
        backdropOpacity={0.5} // 배경 흐리게 설정
      >
        <View style={styles.sheetContent}>
          <View style={styles.sheetHeader}>
            <Text style={styles.title}>다른 친구 선택</Text>
            <TouchableOpacity onPress={toggleModal}>
              <ModalClose />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.petList}>
            <PetListElement isActive={true} />
            <PetListElement isActive={false} />
          </ScrollView>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={toggleModal}>
              <View style={styles.addFriendButton}>
                <CrossBlack />
                <Text style={styles.addFriendButtonText}>새 친구 추가하기</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  sheetContent: {
    backgroundColor: 'white',
    paddingTop: 24,
    paddingBottom: 82,
    paddingHorizontal: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 313,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'NanumSquareRoundEB',
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  petList: {
    display: 'flex',
  },
  btnContainer:{
    position: 'absolute',
    bottom: 34,
    left: 0,
    width: deviceWidth,
    paddingHorizontal: 24,
  },
  addFriendButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 16,
    height: 48,
    gap: 4,
  },
  addFriendButtonText: {
    textAlign: 'center',
    fontFamily: 'NanumSquareRoundEB',
    fontSize: 14,
    fontWeight: '700',
    color: '#4D4D4D',
  },
});

export default ChangePetStatusBottomSheet;