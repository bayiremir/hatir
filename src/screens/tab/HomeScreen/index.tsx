import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import HomeTabBar from '../../../components/home/HomeTabBar';
import MatchScreen from '../../../components/home/MatchScreen';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeTabBar />
      <MatchScreen />
    </View>
  );
};

export default HomeScreen;
