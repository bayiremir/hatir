import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {
  useGetLineupAwayTeamByEventIdQuery,
  useGetLineupHomeTeamByEventIdQuery,
} from '../../../redux/services/mobileApi';

const SquadScreen = ({route}) => {
  const {data} = route.params;

  // API'den veriyi çek
  const {data: HomeTeamLineup} = useGetLineupHomeTeamByEventIdQuery(
    data.response.detail.matchId,
  );
  const {data: AwayTeamLineup} = useGetLineupAwayTeamByEventIdQuery(
    data.response.detail.matchId,
  );

  // Oyuncuları render eden bileşen
  const renderPlayer = (player: any, isHomeTeam: any) => (
    <View
      key={player.id}
      style={{
        position: 'absolute',
        left: `${player.horizontalLayout.y * 90}%`,
        top: isHomeTeam
          ? `${player.verticalLayout.y * 45}%`
          : `${45 + (1 - player.verticalLayout.y) * 45}%`,
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: `https://images.fotmob.com/image_resources/playerimages/${player.id}.png`, // Örnek oyuncu fotoğraf URL'si
        }}
        style={styles.playerImage}
      />
      <Text style={styles.playerText}>
        {player.shirtNumber} {player.lastName}
      </Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.field}>
        {HomeTeamLineup?.response?.lineup?.starters?.map(player =>
          renderPlayer(player, true),
        )}
        {AwayTeamLineup?.response?.lineup?.starters?.map(player =>
          renderPlayer(player, false),
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  field: {
    flex: 1,
    height: 900,
    backgroundColor: '#0f6b32',
    position: 'relative',
    margin: 10,
    borderRadius: 10,
  },
  playerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
  playerText: {
    color: '#fff',
    fontSize: 10,
    marginTop: 4,
    textAlign: 'center',
  },
});

export default SquadScreen;
