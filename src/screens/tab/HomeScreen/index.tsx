import {View, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useGetResturantQuery} from '../../../redux/services/mobileApi';
import Lottie from '../../../components/other_components/Lottie';
import GiftContainer from '../../../components/gift/GiftContainer';
import HomeTabBar from '../../../components/home/HomeTabBar';
import HomeTabHeaderBar from '../../../components/home/HomeTabHeaderBar';

const HomeScreen = () => {
  const {data, isLoading} = useGetResturantQuery();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Lottie />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
          <HomeTabBar />
          <HomeTabHeaderBar data={data ?? []} />
          <GiftContainer data={data ?? []} />
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
