import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    fontFamily: Fonts.Medium,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    fontFamily: Fonts.Regular,
  },
  languageButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  languageButtonText: {
    fontSize: 16,
    color: '#333',
    fontFamily: Fonts.Medium,
  },
  languageButtonSelected: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.Medium,
  },
});
