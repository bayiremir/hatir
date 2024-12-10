import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';

const HighlightNews = ({data}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.rowcontainer}>
          <Image
            source={require('../../../../assets/icons/activity.png')}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>Öne çıkanlar</Text>
        </View>

        <View style={styles.innerContainer}>
          <Image
            source={{uri: data.imageUrl}}
            style={styles.innerContainerImage}
          />
          <Text style={styles.innerContainerText}>{data.title}</Text>
        </View>
      </View>
    </View>
  );
};

export default HighlightNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.macizBlack,
  },
  rowcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  headerImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.macizChiliRed,
    marginRight: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontFamily: Fonts.Bold,
  },
  innerContainer: {
    margin: 10,
    borderRadius: 10,
  },
  innerContainerText: {
    fontSize: 16,
    fontFamily: Fonts.Regular,
    color: 'white',
    marginHorizontal: 12,
    marginVertical: 8,
  },
  innerContainerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});
