import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Fonts} from '../../../interfaces/fonts.enum';

const WhoWinThisMatch = ({matchDetail}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <Text style={styles.headerText}>Kim Kazanır?</Text>
        <Text style={styles.pointText}>Toplam oy: 688</Text>
      </View>
      <View style={styles.secondcontainer}>
        <View style={styles.innercontainer}>
          <Image
            source={{
              uri: `https://images.fotmob.com/image_resources/logo/teamlogo/${matchDetail?.response?.detail?.homeTeam.id}_large.png`,
            }}
            style={styles.imageteam}
          />
        </View>
        <View style={styles.innercontainer}>
          <Text style={styles.innertext}>Berabere</Text>
        </View>
        <View style={styles.innercontainer}>
          <Image
            source={{
              uri: `https://images.fotmob.com/image_resources/logo/teamlogo/${matchDetail?.response?.detail?.awayTeam.id}_large.png`,
            }}
            style={styles.imageteam}
          />
        </View>
      </View>
    </View>
  );
};

export default WhoWinThisMatch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(22,22,22,1)',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.Bold,
  },
  pointText: {
    color: 'rgba(108,108,108,1)',
    fontSize: 12,
    fontFamily: Fonts.Medium,
  },
  innertext: {
    color: 'rgba(192,192,192,1)',
    fontSize: 12,
    fontFamily: Fonts.Bold,
  },
  secondcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innercontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(51,51,51,1)',
    borderRadius: 5,
    height: 30,
    width: 120,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  imageteam: {
    width: 20,
    height: 20,
  },
});
