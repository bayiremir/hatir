import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {storage} from '../../../utils/MMKV';
import i18n from '../../../i18n';
import {styles} from './styles';
import GoBackTabBar from '../../../components/tab_components/GoBackTabBar';

const languages = [
  {
    code: 'en',
    label: 'English',
    flag: require('../../../../assets/icons/usa.png'),
  },
  {
    code: 'tr',
    label: 'Türkçe',
    flag: require('../../../../assets/icons/tur.png'),
  },
];

const ChangeLanguageScreen = ({
  setIsFirstLaunch,
}: {
  setIsFirstLaunch: (value: boolean) => void;
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = async (language: string) => {
    setSelectedLanguage(language);
    await i18n.changeLanguage(language);
    storage.set('appLanguage', language);
  };

  const handleContinue = () => {
    storage.set('isFirstLaunch', false); // İlk kullanım tamamlandı
    setIsFirstLaunch(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{paddingTop: 100}}
        style={styles.languageContainer}>
        <Text style={styles.title}>Select your language / Dilinizi seçin</Text>
        {languages.map(lang => (
          <TouchableOpacity
            key={lang.code}
            style={[
              styles.languageItem,
              selectedLanguage === lang.code && styles.selectedLanguage,
            ]}
            onPress={() => handleLanguageChange(lang.code)}>
            <Image source={lang.flag} style={styles.flag} />
            <Text style={styles.languageLabel}>{lang.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue / Devam</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeLanguageScreen;
