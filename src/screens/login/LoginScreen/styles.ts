import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
    fontFamily: Fonts.Regular,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.Medium,
  },

  textButton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  textButtonText: {
    color: '#4CAF50',
    fontSize: 16,
    fontFamily: Fonts.Medium,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#999',
    fontFamily: Fonts.Medium,
  },
  registerButton: {
    alignItems: 'center',
  },
  registerText: {
    color: '#4CAF50',
    fontSize: 16,
    fontFamily: Fonts.Medium,
  },
  registerTextBold: {
    color: '#4CAF50',
    fontSize: 16,
    fontFamily: Fonts.ExtraBold,
  },
});
