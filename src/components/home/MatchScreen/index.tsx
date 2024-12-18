import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {
  useGetLeagueDetailByLeagueIdQuery,
  useGetMatchesByDateQuery,
} from '../../../redux/services/mobileApi';
import Lottie from '../../other_components/Lottie';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const MatchScreen = ({selectedDate}) => {
  const formattedDate = selectedDate.replace(/-/g, '');
  const {data: matchData, isLoading: matchesLoading} =
    useGetMatchesByDateQuery(formattedDate);

  const navigation = useNavigation();

  const fixDate = (dateTime: string) => dateTime.split(' ')[1];

  // Benzersiz Lig ID'lerini alma
  const leagueIds = React.useMemo(() => {
    if (!matchData?.response?.matches) return [];
    return [
      ...new Set(matchData.response.matches.map(match => match.leagueId)),
    ];
  }, [matchData]);

  // Lig detaylarını toplamak için custom state ve efekti kullanma
  const [leagueDetails, setLeagueDetails] = React.useState<
    Record<string, string>
  >({});
  const [loadingLeagues, setLoadingLeagues] = React.useState(true);

  React.useEffect(() => {
    const fetchLeagueDetails = async () => {
      setLoadingLeagues(true);
      const details: Record<string, string> = {};

      for (const leagueId of leagueIds) {
        try {
          const {data} = await useGetLeagueDetailByLeagueIdQuery(
            leagueId,
          ).refetch();
          if (data?.response?.name) {
            details[leagueId] = data.response.name;
          } else {
            details[leagueId] = 'Bilinmeyen Lig';
          }
        } catch (error) {
          console.error(`Error fetching league ${leagueId}:`, error);
          details[leagueId] = 'Lig Yüklenemedi';
        }
      }

      setLeagueDetails(details);
      setLoadingLeagues(false);
    };

    if (leagueIds.length > 0) fetchLeagueDetails();
  }, [leagueIds]);

  // Maçları liglere göre gruplama
  const groupedMatches = React.useMemo(() => {
    if (!matchData?.response?.matches) return [];
    const groups = matchData.response.matches.reduce((acc, match) => {
      const leagueId = match.leagueId;

      if (!acc[leagueId]) {
        acc[leagueId] = {
          leagueId,
          matches: [],
          leagueName: leagueDetails[leagueId] || 'Lig Yükleniyor...',
        };
      }
      acc[leagueId].matches.push(match);
      return acc;
    }, {});

    return Object.values(groups);
  }, [matchData, leagueDetails]);

  return (
    <View style={styles.container}>
      {matchesLoading || loadingLeagues ? (
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
