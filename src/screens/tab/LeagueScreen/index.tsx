import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import NewsTabBar from '../../../components/news/NewsTabBar';
import {styles} from './styles';
import {useGetLeaguesListAllQuery} from '../../../redux/services/mobileApi';

const LeagueScreen = () => {
  const {data} = useGetLeaguesListAllQuery();

  return (
    <View style={styles.container}>
      <NewsTabBar headerText={'Ligler'} />
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
    </View>
  );
};

export default LeagueScreen;
