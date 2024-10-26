import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innercontainer: {
    flex: 1,
    borderRadius: 20,
    margin: 10,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    fontFamily: Fonts.Bold,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1,
  },
  innerowcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  rating: {
    color: 'black',
    fontSize: 16,
    fontFamily: Fonts.Medium,
    marginRight: 5,
  },
});
