import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';
import {useDispatch} from 'react-redux';
import {setSelectedNews} from '../../../redux/slices/userSlice';

import Animated, {
  interpolate,
  useAnimatedStyle,
  Extrapolate,
} from 'react-native-reanimated';
import {Text as RNText} from 'react-native';

const tabs = [
  {title: 'Senin için', key: 'foryou'},
  {title: 'En Son', key: 'latest'},
  {title: 'Transferler', key: 'transfers'},
  {title: 'Ligler', key: 'leagues'},
];

const HEADER_EXPANDED_HEIGHT = 140;

const NewsTabBar = ({scrollY}) => {
  const [selectedTab, setSelectedTab] = useState('foryou');
  const dispatch = useDispatch();

  const handleNewsChange = tabKey => {
    setSelectedTab(tabKey);
    dispatch(setSelectedNews(tabKey));
  };

  // Sadece rowcontainer için animasyon
  const rowAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, 100],
      [0, -20], // Header küçülünce 20px yukarı kalksın
      Extrapolate.CLAMP,
    );
    return {
      transform: [{translateY}],
    };
  });

  const headerTextAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, 100],
      [1, 0], // Header küçülünce opaklığı 0 olsun
      Extrapolate.CLAMP,
    );
    return {
      opacity,
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Animated.Text style={[styles.header, headerTextAnimatedStyle]}>
          Haberler
        </Animated.Text>
        <Animated.View style={[styles.rowcontainer, rowAnimatedStyle]}>
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
        </Animated.View>
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
    height: HEADER_EXPANDED_HEIGHT, // Sabit yükseklik
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
    marginTop: 20,
  },
  innercontainer: {
    marginHorizontal: 20,
  },
});
