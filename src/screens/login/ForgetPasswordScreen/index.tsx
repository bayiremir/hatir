import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import {
  resetError,
  sendPasswordResetEmail,
} from '../../../redux/slices/authSlice'; // Firebase'den şifre sıfırlama fonksiyonu
import GoBackTabBar from '../../../components/tab_components/GoBackTabBar';
import {useTranslation} from 'react-i18next';
import {useCustomModal} from '../../../components/other_components/Modal/CustomModal/CustomModalProvider';

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const {showModal, hideModal} = useCustomModal();

  const {loading, error, successMessage} = useSelector(
    (state: any) => state.auth,
  ); // Şifre sıfırlama işlemi sırasında durumu yönetmek için
  const {t} = useTranslation();
  const handlePasswordReset = () => {
    dispatch<any>(sendPasswordResetEmail(email)); // E-posta ile şifre sıfırlama talebi gönderiyoruz
  };
  console.log('forgerpasswordscreen erorr', error);

  useEffect(() => {
    if (error) {
      showModal({
        type: 'warning',
        description: error,
        buttons: [
          {
            text: 'Tamam',
            onPress: () => {
              hideModal();
              dispatch(resetError());
            },
            isFocused: true,
          },
        ],
      });
    }
  }, [error]);

  useEffect(() => {
    if (successMessage) {
      showModal({
        type: 'success',
        description: successMessage,
        buttons: [
          {
            text: 'Tamam',
            onPress: () => {
              hideModal();
            },
            isFocused: true,
          },
        ],
      });
    }
  }, [successMessage]);

  return (
    <View style={styles.container}>
      <GoBackTabBar />
      <View style={styles.logoContainer}>
        <Text style={styles.title}>{t('forgetyorpassword')}?</Text>
        <Text style={styles.subtitle}>{t('forgetyorpasswordsubtitle')}</Text>
      </View>

      <TextInput
        placeholder="Email"
        value={email}
        style={styles.input}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#999"
      />

      {loading ? (
        <ActivityIndicator size="large" color="#4CAF50" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
          <Text style={styles.buttonText}>{t('resetpassword')}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ForgetPasswordScreen;
