import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { ModalClose, CrossBlack } from '../../assets/svgs/atoms';
import { PetListElement, PrimaryColorButton } from '../Atoms';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

type Tprops = {
  isVisible: boolean;
  toggleModal: () => void;
}

type TfilterItem = {
  id: number;
  title: string;
  isSelected: boolean;
}

function RecordFilterBottomSheet({isVisible, toggleModal}: Tprops){
  const filerItemList: TfilterItem[] = [
    {id: 1, title: '전체', isSelected: false},
    {id: 2, title: '사료', isSelected: false},
    {id: 3, title: '급수', isSelected: false},
    {id: 4, title: '배변', isSelected: false},
    {id: 5, title: '피부', isSelected: false},
    {id: 6, title: '기타', isSelected: false},
  ];
  const [selectedFilter, setSelectedFilter] = useState<TfilterItem[]>(filerItemList);
  const handleFilterItemPress = (id: number) => {
    setSelectedFilter((prev) => {
      const newFilter = prev.map((item) => ({
        ...item,
        isSelected: item.id === id ? !item.isSelected : item.isSelected,
      }));
      return newFilter;
    });
  };

  return (
    <Modal
        isVisible={isVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}
        backdropOpacity={0.5} // 배경 흐리게 설정
      >
        <View style={styles.sheetContent}>
          <View style={styles.sheetHeader}>
            <Text style={styles.title}>필터</Text>
            <Text style={styles.subTitle}>보고 싶은 항목을 모두 선택해주세요!</Text>
          </View>
          <View style={styles.filterList}>
            {
              selectedFilter.map((item) => (
                <TouchableOpacity key={item.id} onPress={() => handleFilterItemPress(item.id)}>
                  <View style={[styles.filterItem, item.isSelected && styles.selectedFilterItem]}>
                    <Text style={[styles.filterItemText, item.isSelected && styles.selectedFilterItemText]}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              ))
            }
          </View>
          <View style={styles.btnContainer}>
            <View style={styles.btnWrapper}>
              <TouchableOpacity onPress={toggleModal}>
                <View style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>돌아가기</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.btnWrapper}>
              <PrimaryColorButton text="선택완료" onPressHandler={toggleModal} />
            </View>
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
    height: 276,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'NanumSquareRoundEB',
    fontSize: 18,
    fontWeight: '900' as const,
    color: '#1a1a1a',
  },
  subTitle: {
    fontFamily: 'NanumSquareRoundR',
    fontSize: 10,
    fontWeight: '400' as const,
    color: '#808080',
  },
  filterList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 16,
  },
  btnContainer:{
    flexDirection: 'row',
    position: 'absolute',
    bottom: 34,
    left: 0,
    width: deviceWidth,
    paddingHorizontal: 24,
    gap: 8,
  },
  btnWrapper: {
    flex: 1,
  },
  closeButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 16,
    height: 48,
    gap: 4,
  },
  closeButtonText: {
    textAlign: 'center',
    fontFamily: 'NanumSquareRoundEB',
    fontSize: 14,
    fontWeight: '700' as const,
    color: '#4D4D4D',
  },
  filterItem: {
    backgroundColor: '#F4F4F4',
    borderRadius: 16,
    paddingHorizontal: 35.5,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterItemText: {
    fontFamily: 'NanumSquareRoundEB',
    fontSize: 14,
    fontWeight: '700' as const,
    color: '#4D4D4D',
  },
  selectedFilterItem: {
    backgroundColor: '#FFF4F4',
  },
  selectedFilterItemText: {
    color: '#FF5252',
  },
});

export default RecordFilterBottomSheet;
