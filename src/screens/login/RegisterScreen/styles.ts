import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.lightGray,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.extraLightGray,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: COLORS.greenLight,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  loginButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginText: {
    color: COLORS.greenLight,
    fontSize: 16,
  },
});
