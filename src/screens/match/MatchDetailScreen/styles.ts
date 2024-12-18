import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interfaces/fonts.enum';
import {COLORS} from '../../../constants/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.macizBlack,
  },
  imageteam: {
    width: 50,
    height: 50,
  },
  teamtext: {
    color: 'white',
    fontFamily: Fonts.Regular,
    marginTop: 5,
    width: 130,
    textAlign: 'center',
  },
  timetext: {
    color: 'white',
    fontFamily: Fonts.Medium,
    fontSize: 30,
    marginHorizontal: 10,
  },
  scoretext: {
    color: 'white',
    fontFamily: Fonts.Light,
    fontSize: 12,
    marginHorizontal: 10,
  },
});
