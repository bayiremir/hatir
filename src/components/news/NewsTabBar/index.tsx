import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
  Dimensions,
} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';
import {useDispatch} from 'react-redux';
import {setSelectedNews} from '../../../redux/slices/userSlice';

import {Text as RNText} from 'react-native';
import {MagnifyingGlassIcon as MagnifyingGlassIconOutline} from 'react-native-heroicons/outline';

const tabs = [
  {title: 'Senin için', key: 'foryou'},
  {title: 'En Son', key: 'latest'},
  {title: 'Transferler', key: 'transfers'},
  {title: 'Ligler', key: 'leagues'},
];

const NewsTabBar = ({headerText}) => {
  const [selectedTab, setSelectedTab] = useState('foryou');
  const dispatch = useDispatch();

  const handleNewsChange = tabKey => {
    setSelectedTab(tabKey);
    dispatch(setSelectedNews(tabKey));
  };

  // Header font, pozisyon ve kayma animasyonu

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={[styles.header]}>{headerText}</Text>
        {headerText === 'Haberler' && (
          <View style={styles.rowcontainer}>
            {tabs.map((tab, index) => {
              const isSelected = selectedTab === tab.key;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleNewsChange(tab.key)}
                  style={styles.tabContainer}>
                  <RNText
                    style={[
                      styles.tabText,
                      isSelected && {
                        color: COLORS.macizWhite,
                        fontFamily: Fonts.Medium,
                      },
                    ]}>
                    {tab.title}
                  </RNText>
                  {isSelected && <View style={styles.indicatorLine} />}
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        {headerText === 'Ligler' && (
          <View style={styles.searchcontainer}>
            <MagnifyingGlassIconOutline
              color={COLORS.macizWhite}
              size={20}
              style={styles.icon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder={'Ligleri bul'}
              placeholderTextColor={COLORS.macizWhite}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default NewsTabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
    justifyContent: 'flex-end',
    height: Dimensions.get('window').height * 0.2 - 50,
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    paddingVertical: 10,
    position: 'relative',
  },
  header: {
    color: COLORS.macizWhite,
    fontFamily: Fonts.ExtraBold,
    fontSize: 24,
  },
  tabText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    fontFamily: Fonts.Regular,
  },
  indicatorLine: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    width: '95%',
    backgroundColor: COLORS.macizCinnabar,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  rowcontainer: {
    flexDirection: 'row',
  },
  innercontainer: {
    marginHorizontal: 20,
  },
  searchcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    marginVertical: 5,
    marginBottom: 10,
  },
  icon: {
    marginLeft: 10,
  },
  searchText: {
    color: COLORS.macizWhite,
    fontFamily: Fonts.Regular,
  },
  searchInput: {
    borderRadius: 10,
    color: COLORS.macizWhite,
    width: '70%',
    padding: 10,
  },
});
