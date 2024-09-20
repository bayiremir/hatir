import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {storage} from '../../../utils/MMKV';
import i18n from '../../../i18n';
import {styles} from './styles';
import GoBackTabBar from '../../../components/tab_components/GoBackTabBar';

const ChangeLanguageScreen = ({
  setIsFirstLaunch,
}: {
  setIsFirstLaunch: (value: boolean) => void;
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const navigation = useNavigation();

  const handleLanguageChange = async (language: string) => {
    setSelectedLanguage(language);
    await i18n.changeLanguage(language);
    storage.set('appLanguage', language);
  };

  const handleContinue = () => {
    setIsFirstLaunch(false);
    navigation.navigate('Login'); // LoginScreen'e yönlendiriyoruz
  };

  return (
    <View style={styles.container}>
      <GoBackTabBar />
      <Text style={styles.title}>Hoş Geldiniz!</Text>
      <Text style={styles.subtitle}>Dilinizi seçin:</Text>

      <TouchableOpacity
        style={[
          styles.languageButton,
          selectedLanguage === 'tr' && styles.languageButtonSelected,
        ]}
        onPress={() => handleLanguageChange('tr')}>
        <Text style={styles.languageButtonText}>Türkçe</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.languageButton,
          selectedLanguage === 'en' && styles.languageButtonSelected,
        ]}
        onPress={() => handleLanguageChange('en')}>
        <Text style={styles.languageButtonText}>English</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Devam Et</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeLanguageScreen;
