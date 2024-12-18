import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.macizBlack,
  },
  rowcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  headerText: {
    color: COLORS.macizWhite,
    fontSize: 20,
    fontFamily: Fonts.Bold,
  },
  editButton: {
    borderRadius: 10,
  },
  editText: {
    color: COLORS.macizChiliRed,
    padding: 5,
  },
  leaguesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 10,
  },
  logo: {
    width: 24,
    height: 24,
    borderRadius: 10,
  },
  leaguesText: {
    color: COLORS.macizWhite,
    marginLeft: 10,
    fontFamily: Fonts.Regular,
  },
});
