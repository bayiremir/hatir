import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useGetLeagueMatchesByDateQuery} from '../../../redux/services/mobileApi';
import Lottie from '../../other_components/Lottie';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const MatchScreen = ({selectedDate}) => {
  const formattedDate = selectedDate.replace(/-/g, '');
  const {data, isLoading} = useGetLeagueMatchesByDateQuery(formattedDate);

  const fixDate = (dateTime: string) => {
    const time = dateTime.split(' ')[1];
    return time;
  };
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Lottie />
      ) : (
        <FlatList
          data={data?.response}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.matchContainer}>
              <View style={styles.headerContainer}>
                <Image
                  source={{
                    uri: `https://images.fotmob.com/image_resources/logo/leaguelogo/dark/${item.id}.png`,
                  }}
                  style={styles.image}
                />
                <Text style={styles.headerText}>{item.ccode} - </Text>
                <Text style={styles.headerText}>{item.name}</Text>
              </View>
              <View style={styles.innerMatchContainer}>
                {item.matches.map((match, index) => {
                  const isLastMatch = index === item.matches.length - 1;
                  const showBorder = item.matches.length > 1 && !isLastMatch;
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('MatchDetailScreen', {
                          matchId: match.id,
                        });
                      }}
                      key={index}
                      style={[
                        styles.singleMatchContainer,
                        {borderBottomWidth: showBorder ? 1 : 0},
                      ]}>
                      <Text style={styles.matchTextRight}>
                        {match.home.name}{' '}
                      </Text>
                      <Image
                        source={{
                          uri: `https://images.fotmob.com/image_resources/logo/teamlogo/${match.home.id}_large.png`,
                        }}
                        style={styles.imageteam}
                      />
                      {match.status.finished ||
                      match.status.liveTime ||
                      match.status.ongoing ? (
                        <Text style={styles.matchTextTime}>
                          {match.status.scoreStr}
                        </Text>
                      ) : (
                        <Text style={styles.matchTextTime}>
                          {fixDate(match.time)}
                        </Text>
                      )}
                      <Image
                        source={{
                          uri: `https://images.fotmob.com/image_resources/logo/teamlogo/${match.away.id}_large.png`,
                        }}
                        style={styles.imageteam}
                      />
                      <Text style={styles.matchTextLeft}>
                        {match.away.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default MatchScreen;
