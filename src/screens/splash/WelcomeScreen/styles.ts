import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interfaces/fonts.enum';
import {COLORS} from '../../../constants/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
  },
  top: {
    top: 0,
    position: 'absolute',
    width: '100%',
    height: 200,
    backgroundColor: COLORS.greenMedium,
    borderBottomLeftRadius: 200,
  },
  bottom: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: 200,
    backgroundColor: COLORS.greenMedium,
    borderTopRightRadius: 200,
  },
  logo: {
    width: 300,
    height: 120,
  },
  title: {
    fontSize: 28,
    color: '#333',
    marginBottom: 20,
    fontFamily: Fonts.Regular,
  },
  arrowButton: {
    position: 'absolute',
    alignItems: 'center',
    zIndex: 1,
    bottom: 50,
    right: 50,
  },
  arrow: {
    fontSize: 40,
    color: '#333',
  },
});
