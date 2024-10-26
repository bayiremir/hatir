import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Fonts} from '../../../../interfaces/fonts.enum';
import {COLORS} from '../../../../constants/COLORS';

const NewNotification = ({props}: {props: any}) => {
  return (
    <Pressable
      onPress={() => {
        console.log('NewNotification onPress tetiklendi');
        props.onPress(); // Tetikleyici
      }}
      style={styles.container}>
      <View style={{flex: 1}}>
        <Text numberOfLines={1} style={styles.notificationTitle}>
          {props.notificationTitle}
        </Text>
        <Text numberOfLines={2} style={styles.notificationBody}>
          {props.notificationBody}
        </Text>
      </View>
      <View style={styles.miniBar} />
    </Pressable>
  );
};

export default NewNotification;

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: '90%',
    borderRadius: 15,
    padding: 10,
    backgroundColor: COLORS.tealDark,
  },
  notificationTitle: {
    color: 'white',
    fontSize: 14,
    fontFamily: Fonts.SemiBold,
  },
  notificationBody: {
    color: 'white',
    fontSize: 12,
    fontFamily: Fonts.Regular,
    marginTop: 3,
  },
  miniBar: {
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 3,
    width: 50,
    borderRadius: 10,
    marginTop: 5,
  },
});
