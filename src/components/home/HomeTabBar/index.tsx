import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MagnifyingGlassIcon as MagnifyingGlassIconOutline} from 'react-native-heroicons/outline';
import {Fonts} from '../../../interfaces/fonts.enum';
import {useTranslation} from 'react-i18next';

const HomeTabBar = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.tabBarContainer}>
      <MagnifyingGlassIconOutline color={'gray'} size={36} />
      <View>
        <Text style={[styles.tabBarContainetHeader, {color: 'gray'}]}>
          {t('location')}
        </Text>
        <Text
          style={[
            styles.tabBarContainetHeader,
            {fontFamily: Fonts.Medium, fontSize: 20},
          ]}>
          Maltepe
        </Text>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://cdn.evrimagaci.org/q0-4ffcpiHlsmEHyfYCcYQBWPNg=/storage.evrimagaci.org%2Fold%2Fmi_media%2Fafcae823e61eefb077e1f223594b1e7f.jpeg',
          }}
          style={styles.profileImage}
        />
        <View style={styles.redDot} />
      </View>
    </View>
  );
};

export default HomeTabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 30,
    paddingTop: 70,
  },
  tabBarContainetHeader: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 25,
  },
  redDot: {
    width: 10,
    height: 10,
    backgroundColor: 'rgba(135,65,93,1)',
    borderRadius: 5,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
