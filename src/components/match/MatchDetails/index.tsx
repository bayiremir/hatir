import {Image, Text, View} from 'react-native';
import React from 'react';
import {
  useGetMatchLocationByEventIdQuery,
  useGetMatchRefereeByEventIdQuery,
} from '../../../redux/services/mobileApi';
import {styles} from './styles';
import {
  BuildingLibraryIcon as BuildingLibraryIconSolid,
  CalendarDaysIcon as CalendarDaysIconSolid,
  UserIcon as UserIconSolid,
} from 'react-native-heroicons/solid';

const MatchDetails = ({matchDetail}) => {
  const {data} = useGetMatchLocationByEventIdQuery(
    matchDetail?.response?.detail?.matchId,
  );
  const {data: refereeData} = useGetMatchRefereeByEventIdQuery(
    matchDetail?.response?.detail?.matchId,
  );
  const fixDate = (dateTime: string) => {
    if (!dateTime) return '';
    const date = new Date(dateTime);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const formatDate = (dateTime: string) => {
    if (!dateTime) return '';
    const today = new Date();
    const matchDate = new Date(dateTime);

    const isToday =
      today.getDate() === matchDate.getDate() &&
      today.getMonth() === matchDate.getMonth() &&
      today.getFullYear() === matchDate.getFullYear();

    const isTomorrow =
      today.getDate() + 1 === matchDate.getDate() &&
      today.getMonth() === matchDate.getMonth() &&
      today.getFullYear() === matchDate.getFullYear();

    const time = fixDate(dateTime);

    if (isToday) {
      return `Bugün ${time}`;
    } else if (isTomorrow) {
      return `Yarın ${time}`;
    } else {
      const day = matchDate.getDate().toString().padStart(2, '0');
      const month = (matchDate.getMonth() + 1).toString().padStart(2, '0');
      const year = matchDate.getFullYear();
      return `${day}.${month}.${year} ${time}`;
    }
  };

  return (
    <View style={styles.container}>
      <View style={{marginVertical: 10}}>
        <View style={styles.rowcontainer}>
          <BuildingLibraryIconSolid size={20} color={'white'} />
          <View style={styles.textcontainer}>
            <Text style={styles.text}>
              {data?.response?.location?.name}, {data?.response?.location?.city}
              , {data?.response?.location?.country}
            </Text>
          </View>
        </View>
        <View style={styles.rowcontainer}>
          <CalendarDaysIconSolid size={20} color={'white'} />
          <View style={styles.textcontainer}>
            <Text style={styles.text}>
              {formatDate(matchDetail?.response?.detail?.matchTimeUTCDate)}
            </Text>
          </View>
        </View>
        <View style={styles.rowcontainer}>
          <Image
            source={{
              uri: `https://images.fotmob.com/image_resources/logo/leaguelogo/dark/${matchDetail.response.detail.leagueId}.png`,
            }}
            style={styles.imageteam}
          />
          <View style={styles.textcontainer}>
            <Text style={styles.text}>
              {matchDetail?.response?.detail?.leagueName} -{' '}
              {matchDetail?.response?.detail?.leagueRoundName}
            </Text>
          </View>
        </View>
        <View style={styles.rowcontainer}>
          <UserIconSolid size={20} color={'white'} />
          <View
            style={[
              styles.textcontainer,
              {flexDirection: 'row', alignItems: 'center'},
            ]}>
            <Image
              source={{uri: refereeData?.response.referee.imgUrl}}
              style={[styles.imageteam, {marginRight: 5}]}
            />
            <Text style={styles.text}>
              {refereeData?.response?.referee?.text}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MatchDetails;
