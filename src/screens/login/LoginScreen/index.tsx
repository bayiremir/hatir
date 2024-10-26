import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import {login, resetError} from '../../../redux/slices/authSlice';
import {useNavigation} from '@react-navigation/native';
import Lottie from '../../../components/other_components/Lottie';
import TabBar from '../../../components/tab_components/TabBar';
import {useTranslation} from 'react-i18next';
import {useCustomModal} from '../../../components/other_components/Modal/CustomModal/CustomModalProvider';
import CheckBox from '@react-native-community/checkbox';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // Remember Me state
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state: any) => state.auth);
  const navigation = useNavigation<any>();
  const {t} = useTranslation();
  const {showModal, hideModal} = useCustomModal();

  const handleLogin = () => {
    dispatch<any>(login(email, password, rememberMe)); // Remember Me durumu da gönderiliyor
  };
  useEffect(() => {
    if (error) {
      showModal({
        type: 'error',
        description: error,
        buttons: [
          {
            text: 'Tamam',
            onPress: () => {
              hideModal();
              dispatch(resetError()); // Modal kapatıldığında hatayı sıfırla
            },
            isFocused: true,
          },
        ],
      });
    }
  }, [error]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Lottie />
      ) : (
        <>
          <TabBar />
          <View style={styles.logoContainer}>
            <Text style={styles.title}>{t('welcome')}</Text>
            <Text style={styles.subtitle}>{t('welcomeSubtitle')}</Text>
          </View>
          <TextInput
            placeholder="Email"
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

          {/* Add Remember Me button*/}
          <View style={styles.rememberMe}>
            <CheckBox
              onTintColor="green"
              onCheckColor="green"
              value={rememberMe}
              onValueChange={setRememberMe}
            />
            <Text style={styles.rememberMeText}>{t('rememberme')}</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>{t('signin')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPasswordScreen')}
            style={styles.textButton}>
            <Text style={styles.textButtonText}>{t('forgetyorpassword')}?</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider} />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}
            style={styles.registerButton}>
            <Text style={styles.registerText}>
              {t('donthaveaccount')}{' '}
              <Text style={styles.registerTextBold}>{t('signup')}</Text>
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default LoginScreen;
