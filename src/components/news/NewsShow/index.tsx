import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';
import {News} from '../../../interfaces/gettrandingnews.enum';
import {useNavigation} from '@react-navigation/native';

const NewsShow = ({data}) => {
  const navigation = useNavigation<any>();
  const getRelativeTime = (gmtTime: string) => {
    const now = new Date().getTime();
    const past = new Date(gmtTime).getTime();
    const diffMs = now - past; // milisaniye farkı

    const diffMinutes = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMinutes < 1) {
      return 'Şimdi';
    } else if (diffMinutes < 60) {
      return `${diffMinutes} dakika önce`;
    } else if (diffHours < 24) {
      return `${diffHours} saat önce`;
    } else {
      return `${diffDays} gün önce`;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowcontainer}>
        <View style={styles.innerContainer}>
          {data?.slice(1).map((item: News, index: number) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('WebViewNews', {
                    url: item,
                  })
                }
                key={index}
                style={styles.newsItemContainer}>
                <View style={styles.topRow}>
                  <Image
                    source={{uri: item.imageUrl}}
                    style={styles.innerContainerImage}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <View style={styles.bottomRow}>
                      <Image
                        source={{
                          uri: 'https://images.fotmob.com/image_resources/news/small90min.png',
                        }}
                        style={styles.sourceIcon}
                      />
                      <Text style={styles.sourceText}>{item.sourceStr} - </Text>
                      <Text style={styles.sourceText}>
                        {getRelativeTime(item.gmtTime)}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default NewsShow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.macizBlack,
    margin: 10,
  },
  rowcontainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  innerContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
  newsItemContainer: {
    marginBottom: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    fontFamily: Fonts.Medium,
    color: 'white',
    marginBottom: 5,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sourceText: {
    fontSize: 12,
    fontFamily: Fonts.Regular,
    color: 'white',
  },
  innerContainerImage: {
    width: 120,
    height: 70,
    borderRadius: 10,
  },
  sourceIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    resizeMode: 'contain',
  },
});
