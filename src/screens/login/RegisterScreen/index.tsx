import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import {register} from '../../../redux/slices/authSlice';
import {useNavigation} from '@react-navigation/native';
import GoBackTabBar from '../../../components/tab_components/GoBackTabBar';
import {useTranslation} from 'react-i18next';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state: any) => state.auth);
  const navigation = useNavigation<any>();
  const {t} = useTranslation();
  const handleRegister = () => {
    if (password !== confirmPassword) {
      // component alert design here
      return;
    }
    dispatch<any>(register(email, password));
  };

  return (
    <View style={styles.container}>
      <GoBackTabBar />
      <TextInput
        placeholder={t('name')}
        value={name}
        style={styles.input}
        onChangeText={setName}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder={t('email')}
        value={email}
        style={styles.input}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder={t('password')}
        value={password}
        style={styles.input}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder={t('confirmpassword')}
        value={confirmPassword}
        style={styles.input}
        onChangeText={setConfirmPassword}
        secureTextEntry
        placeholderTextColor="#999"
      />

      {loading ? (
        <ActivityIndicator size="large" color="#4CAF50" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>{t('signup')}</Text>
        </TouchableOpacity>
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.loginButton}>
        <Text style={styles.loginText}>
          {t('alreadyhaveaccount')} {t('login')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
