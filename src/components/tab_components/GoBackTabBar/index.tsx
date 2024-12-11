import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  ChevronLeftIcon as ChevronLeftIconOutline,
  BellAlertIcon as BellAlertIconOutline,
  StarIcon as StarIconOutline,
  ArrowUpOnSquareIcon as ArrowUpOnSquareIconOutline,
} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';

const GoBackTabBar = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.tabBarContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <ChevronLeftIconOutline color="white" size={24} />
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <ArrowUpOnSquareIconOutline
              color="white"
              size={24}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <BellAlertIconOutline color="white" size={24} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <StarIconOutline color="white" size={24} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GoBackTabBar;

const styles = StyleSheet.create({
  container: {},
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingTop: 60,
    marginVertical: 10,
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
