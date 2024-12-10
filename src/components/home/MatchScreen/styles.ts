import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  matchContainer: {
    margin: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  innerMatchContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  singleMatchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
    borderBottomColor: 'rgba(255, 255, 255, 0.15)',
  },
  headerText: {
    fontSize: 18,
    color: 'white',
    fontFamily: Fonts.Bold,
  },
  matchTextRight: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.Regular,
    flex: 1,
    textAlign: 'right',
  },
  matchTextLeft: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.Regular,
    flex: 1,
    textAlign: 'left',
  },
  matchTextTime: {
    color: 'white',
    fontSize: 14,
    fontFamily: Fonts.Regular,
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  imageteam: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginHorizontal: 10,
  },
});
