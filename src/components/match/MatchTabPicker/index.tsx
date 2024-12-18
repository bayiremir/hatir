import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';

const MatchTabPicker = ({activeTab, onTabChange}) => {
  const handleTabPress = (tabName: string) => {
    onTabChange(tabName); // Ana bileşene seçilen sekmeyi bildir
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {['Overview', 'Squad', 'Table', 'HeadToHead'].map(tab => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.dateContainer,
            activeTab === tab && styles.selectedContainer,
          ]}
          onPress={() => handleTabPress(tab)}>
          <Text
            style={[styles.dateText, activeTab === tab && styles.selectedText]}>
            {tab === 'Overview'
              ? 'Önizleme'
              : tab === 'Squad'
              ? 'Kadro'
              : tab === 'Table'
              ? 'Tablo'
              : 'Karşılaşmalar'}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default MatchTabPicker;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
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
