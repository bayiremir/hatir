import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import NewsTabBar from '../../../components/news/NewsTabBar';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import {styles} from './styles';
import {useGetLeaguesListAllQuery} from '../../../redux/services/mobileApi';

const LeagueScreen = () => {
  const {data} = useGetLeaguesListAllQuery();
  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <View style={styles.container}>
      <NewsTabBar headerText={'Ligler'} scrollY={scrollY} />
      <Animated.ScrollView onScroll={onScroll} scrollEventThrottle={16}>
        <View style={styles.rowcontainer}>
          <Text style={styles.headerText}>Takip Ediliyor</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Düzenle</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data?.response.leagues}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.leaguesContainer}>
              <Image source={{uri: item.logo}} style={styles.logo} />
              <Text style={styles.leaguesText}>{item.name}</Text>
            </View>
          )}
        />
      </Animated.ScrollView>
    </View>
  );
};

export default LeagueScreen;
