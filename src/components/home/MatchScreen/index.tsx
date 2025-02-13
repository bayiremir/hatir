import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useGetMatchesByDateQuery} from '../../../redux/services/mobileApi';
import Lottie from '../../other_components/Lottie';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import allLeagues from '../../../utils/leagues.json';

const MatchScreen = ({selectedDate}) => {
  const formattedDate = selectedDate.replace(/-/g, '');
  const {data: matchData, isLoading: matchesLoading} =
    useGetMatchesByDateQuery(formattedDate);

  const navigation = useNavigation();

  const fixDate = (dateTime: string) => dateTime.split(' ')[1];

  // Benzersiz Lig ID'lerini alma

  // Ligin adını leagues.json'dan alma
  // Ligin adını leagues.json'dan alma
  const getLeagueNameById = leagueId => {
    for (const country of allLeagues.response.leagues) {
      const league = country.leagues.find(league => league.id === leagueId);
      if (league) {
        return league.name;
      }
    }
    return 'Lig Yükleniyor...';
  };

  // Maçları liglere göre gruplama
  const groupedMatches = React.useMemo(() => {
    if (!matchData?.response?.matches) return [];
    const groups = matchData.response.matches.reduce((acc, match) => {
      const leagueId = match.leagueId;

      if (!acc[leagueId]) {
        acc[leagueId] = {
          leagueId,
          matches: [],
          leagueName: getLeagueNameById(leagueId),
        };
      }
      acc[leagueId].matches.push(match);
      return acc;
    }, {});

    return Object.values(groups);
  }, [matchData]);

  return (
    <View style={styles.container}>
      {matchesLoading ? (
        <Lottie />
      ) : (
        <FlatList
          data={groupedMatches}
          keyExtractor={item => item?.leagueId.toString()}
          renderItem={({item}) => (
            <View style={styles.matchContainer}>
              <View style={styles.headerContainer}>
                <Image
                  source={{
                    uri: `https://images.fotmob.com/image_resources/logo/leaguelogo/dark/${item.leagueId}.png`,
                  }}
                  style={styles.image}
                />
                <Text style={styles.headerText}>{item.leagueName}</Text>
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
                      key={match.id}
                      style={[
                        styles.singleMatchContainer,
                        {borderBottomWidth: showBorder ? 1 : 0},
                      ]}>
                      <Text style={styles.matchTextRight}>
                        {match.home.name}
                      </Text>
                      <Image
                        source={{
                          uri: `https://images.fotmob.com/image_resources/logo/teamlogo/${match.home.id}_large.png`,
                        }}
                        style={styles.imageteam}
                      />
                      <Text style={styles.matchTextTime}>
                        {match.status.finished
                          ? match.status.scoreStr
                          : fixDate(match.time)}
                      </Text>
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
