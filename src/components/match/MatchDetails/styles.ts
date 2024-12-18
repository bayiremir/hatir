import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(22,22,22,1)',
    margin: 10,
    borderRadius: 10,
  },
  rowcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: Fonts.Regular,
    padding: 2,
  },
  textcontainer: {
    backgroundColor: 'rgba(122,122,122,0.1)',
    borderRadius: 20,
    marginLeft: 16,
    padding: 5,
  },
  imageteam: {
    width: 20,
    height: 20,
  },
});
