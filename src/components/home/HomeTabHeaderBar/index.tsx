import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Fonts} from '../../../interfaces/fonts.enum';
import HorizontalScroll from '../HorizontalScroll';
import {useTranslation} from 'react-i18next';
import {Root} from '../../../interfaces/resturant.inteface';

const HomeTabHeaderBar = ({data}: {data: Root}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerRowContainer}>
        <Text
          style={[
            styles.headerText,
            {fontSize: 24, fontFamily: Fonts.Bold, color: 'black'},
          ]}>
          {t('populargift')}
        </Text>
        <TouchableOpacity>
          <Text style={styles.headerText}>{t('viewall')}</Text>
        </TouchableOpacity>
      </View>
      <HorizontalScroll />
      <Image
        source={{
          uri: data?.[0]?.data?.rlp?.carousels?.data[0]?.campaigns[0]
            ?.image_large,
        }}
        style={styles.headerImage}
      />
    </View>
  );
};

export default HomeTabHeaderBar;

const styles = StyleSheet.create({
  headerContainer: {
    margin: 20,
  },
  headerImage: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height / 7,
    borderRadius: 30,
    marginVertical: 10,
    alignSelf: 'center',
  },
  headerRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  headerText: {
    color: 'gray',
    fontSize: 16,
    fontFamily: Fonts.Medium,
  },
});
