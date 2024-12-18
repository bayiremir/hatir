import {Image, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {
  useGetMatchDetailByEventIdQuery,
  useGetMatchStatusByEventIdQuery,
} from '../../../redux/services/mobileApi';
import {styles} from './styles';
import MatchTabs from '../../../navigation/stack/MatchTabs';
import Lottie from '../../../components/other_components/Lottie';
import GoBackTabBar from '../../../components/tab_components/GoBackTabBar';

const MatchDetailScreen = () => {
  const route = useRoute<any>();
  const matchId = route.params.matchId;

  const {data: matchDetail, isLoading: matchDetailLoading} =
    useGetMatchDetailByEventIdQuery(matchId);
  const {data: matchStatus, isLoading: matchStatusLoading} =
    useGetMatchStatusByEventIdQuery(matchId);

  // Tarih formatını düzenleyen fonksiyon
  const fixDate = (dateTime: string) => {
    if (!dateTime) return '';
    const date = new Date(dateTime); // Gelen tarih UTC formatında olmalı
    const hours = date.getHours().toString().padStart(2, '0'); // Saat
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Dakika
    return `${hours}:${minutes}`; // 17:00 formatında döndür
  };

  // Yükleme durumunu kontrol et
  if (matchDetailLoading || matchStatusLoading) {
    return (
      <View style={styles.container}>
        <GoBackTabBar />
        <Lottie />
      </View>
    );
  }

  // Yükleme tamamlandıktan sonra ekranı göster
  return (
    <View style={styles.container}>
      <GoBackTabBar />
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
        {matchStatus?.response.status.ongoing ||
        matchStatus?.response.status.finished ? (
          <View style={{alignItems: 'center'}}>
            <Text style={styles.timetext}>
              {matchStatus?.response.status.scoreStr}
            </Text>
            {matchStatus?.response.status.liveTime && (
              <Text style={styles.scoretext}>
                {matchStatus?.response.status.liveTime.long}
              </Text>
            )}
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
      {/* MatchTabs bileşenine data yalnızca yükleme tamamlandıktan sonra gönderiliyor */}
      <MatchTabs data={matchDetail} />
    </View>
  );
};

export default MatchDetailScreen;
