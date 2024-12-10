import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import {useGetLeagueMatchesByDateQuery} from '../../../redux/services/mobileApi';
import {useSelector} from 'react-redux';
import Lottie from '../../other_components/Lottie';
import {styles} from './styles';

const MatchScreen = () => {
  const selectedDate = useSelector(
    (state: {user: {selectedDate: string}}) => state.user.selectedDate,
  );
  const formattedDate = selectedDate.replace(/-/g, '');

  const {data, isLoading} = useGetLeagueMatchesByDateQuery(formattedDate);

  const fixDate = (dateTime: string) => {
    const time = dateTime.split(' ')[1];
    return time;
  };

  return (
    <>
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
                    <View
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
                      <Text style={styles.matchTextTime}>
                        {fixDate(match.time)}
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
                    </View>
                  );
                })}
              </View>
            </View>
          )}
        />
      )}
    </>
  );
};

export default MatchScreen;
