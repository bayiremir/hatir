import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';

const GoBackTabBar = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.background}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}>
        <ChevronLeftIcon color="black" size={28} />
      </TouchableOpacity>
      <Image
        source={require('../../../../assets/appicon/greenlogo.png')}
        style={styles.image}
      />
    </View>
  );
};

export default GoBackTabBar;

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  button: {
    position: 'absolute',
    left: 10,
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 100,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});
