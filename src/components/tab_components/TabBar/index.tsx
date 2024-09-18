import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const TabBar = () => {
  return (
    <View style={styles.background}>
      <Image
        source={require('../../../../assets/appicon/greenlogo.png')}
        style={styles.image}
      />
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
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
