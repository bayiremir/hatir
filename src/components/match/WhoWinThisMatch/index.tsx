import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WhoWinThisMatch = ({matchDetail}) => {
  console.log(matchDetail);
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Image
          source={{
            uri: `https://images.fotmob.com/image_resources/logo/teamlogo/${matchDetail?.homeTeam.id}_large.png`,
          }}
          style={styles.imageteam}
        />
      </View>
      <View style={styles.innercontainer}>
        <Text>Berabere</Text>
      </View>
      <View style={styles.innercontainer}>
        <Image
          source={{
            uri: `https://images.fotmob.com/image_resources/logo/teamlogo/${matchDetail?.awayTeam.id}_large.png`,
          }}
          style={styles.imageteam}
        />
      </View>
    </View>
  );
};

export default WhoWinThisMatch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  innercontainer: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f9f9f9',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    height: 100,
  },
  imageteam: {
    flex: 1,
    width: 24,
    height: 24,
  },
});
