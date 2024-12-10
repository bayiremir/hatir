import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  ClockIcon as ClockIconOutline,
  MagnifyingGlassIcon as MagnifyingGlassIconOutline,
  CalendarIcon as CalendarIconOutline,
} from 'react-native-heroicons/outline';
import {COLORS} from '../../../constants/COLORS';
import DatePicker from '../DatePicker';

const HomeTabBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBarContainer}>
        <Image
          source={require('../../../../assets/appicon/macizwithout.png')}
          style={styles.logo}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <ClockIconOutline color="white" size={24} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MagnifyingGlassIconOutline
              color="white"
              size={24}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <CalendarIconOutline color="white" size={24} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <DatePicker />
    </View>
  );
};

export default HomeTabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.macizBlack,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingTop: 60,
  },
  logo: {
    width: 128,
    height: 64,
  },
  iconContainer: {
    flexDirection: 'row',
    marginRight: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 15,
  },
});
