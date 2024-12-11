import {Image, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {
  useGetMatchDetailByEventIdQuery,
  useGetMatchStatusByEventIdQuery,
} from '../../../redux/services/mobileApi';
import Lottie from '../../other_components/Lottie';
import {styles} from './styles';
import GoBackTabBar from '../../tab_components/GoBackTabBar';
import MatchTabs from '../../../navigation/stack/MatchTabs';

const MatchDetailScreen = () => {
  const route = useRoute<any>();
  const matchId = route.params.matchId;
  const {data: matchDetail, isLoading: matchDetailLoading} =
    useGetMatchDetailByEventIdQuery(matchId);
  const {data: matchStatus, isLoading: matchStatusLoading} =
    useGetMatchStatusByEventIdQuery(matchId);
  console.log(matchId);
  console.log(matchStatus);
  const fixDate = (dateTime: string) => {
    if (!dateTime) return '';
    const date = new Date(dateTime); // Gelen tarih UTC formatında olmalı
    const hours = date.getHours().toString().padStart(2, '0'); // Saat
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Dakika
    return `${hours}:${minutes}`; // 17:00 formatında döndür
  };

  return (
    <View style={styles.container}>
      <GoBackTabBar />
      {matchDetailLoading || matchStatusLoading ? (
        <Lottie />
      ) : (
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={{alignItems: 'center', flex: 1}}>
            <Image
              source={{
                uri: `https://images.fotmob.com/image_resources/logo/teamlogo/${matchDetail?.response.detail.homeTeam.id}_large.png`,
              }}
              style={styles.imageteam}
            />
            <Text style={styles.teamtext}>
              {matchDetail?.response.detail.homeTeam.name}
            </Text>
          </View>
          {matchStatus?.response.status.liveTime ? (
            <View style={{alignItems: 'center'}}>
              <Text style={styles.timetext}>
                {matchStatus?.response.status.scoreStr}
              </Text>
              <Text style={styles.scoretext}>
                {matchStatus?.response.status.liveTime.long}
              </Text>
            </View>
          ) : (
            <Text style={styles.timetext}>
              {fixDate(matchDetail?.response.detail.matchTimeUTCDate ?? '')}
            </Text>
          )}
          <View style={{alignItems: 'center', flex: 1}}>
            <Image
              source={{
                uri: `https://images.fotmob.com/image_resources/logo/teamlogo/${matchDetail?.response.detail.awayTeam.id}_large.png`,
              }}
              style={styles.imageteam}
            />
            <Text style={styles.teamtext}>
              {matchDetail?.response.detail.awayTeam.name}
            </Text>
          </View>
        </View>
      )}
      <MatchTabs />
    </View>
  );
};

export default MatchDetailScreen;
