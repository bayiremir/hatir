import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Fonts} from '../../../interfaces/fonts.enum';

const HorizontalScroll = () => {
  return (
    <ScrollView horizontal>
      <TouchableOpacity style={styles.scrollInnerContainer}>
        <Text style={styles.scrollText}>{'Balık'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scrollInnerContainer}>
        <Text style={styles.scrollText}>{'Balık'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HorizontalScroll;

const styles = StyleSheet.create({
  scrollInnerContainer: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  scrollText: {
    color: 'black',
    fontSize: 16,
    fontFamily: Fonts.Medium,
    marginHorizontal: 10,
  },
});
