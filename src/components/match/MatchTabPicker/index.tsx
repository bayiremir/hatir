import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';

const MatchTabPicker = ({onTabChange}) => {
  const [selectedTab, setSelectedTab] = useState<string>('Overview'); // Varsayılan olarak Overview

  const handleTabPress = (tabName: string) => {
    setSelectedTab(tabName); // Seçilen sekmeyi güncelle
    onTabChange(tabName); // Ana bileşene seçilen sekmeyi bildir
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {['Overview', 'Squad', 'Table'].map(tab => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.dateContainer,
            selectedTab === tab && styles.selectedContainer,
          ]}
          onPress={() => handleTabPress(tab)}>
          <Text
            style={[
              styles.dateText,
              selectedTab === tab && styles.selectedText,
            ]}>
            {tab === 'Overview'
              ? 'Önizleme'
              : tab === 'Squad'
              ? 'Kadro'
              : 'Tablo'}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default MatchTabPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  dateContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  dateText: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    color: '#d9d9d9',
  },
  selectedContainer: {
    borderBottomWidth: 3,
    borderColor: COLORS.macizCinnabar, // Indicator çizgi rengi
  },
  selectedText: {
    fontFamily: Fonts.Bold,
    color: COLORS.macizWhite, // Seçili metin rengi
  },
});
