import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {GlobeAltIcon as GlobeAltIconSolid} from 'react-native-heroicons/solid';
import {useCustomModal} from '../Modal/CustomModal/CustomModalProvider';
import {Fonts} from '../../../interfaces/fonts.enum';
import {storage} from '../../../utils/MMKV';

const SwitchLanguage = () => {
  const {i18n} = useTranslation();
  const {showModal, hideModal} = useCustomModal();
  const {t} = useTranslation();

  // Uygulama açıldığında dil tercihini yükle
  useEffect(() => {
    const savedLanguage = storage.getString('appLanguage'); // MMKV'den dil bilgisi alınır
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage); // Kaydedilen dil yüklenir
    }
  }, []);

  const changeLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n
      .changeLanguage(newLang)
      .then(() => {
        // Dil değiştikten sonra MMKV'ye kaydet
        storage.set('appLanguage', newLang);

        // Modal göster
        showModal({
          type: 'info',
          description: t('languagechanged'),
          buttons: [
            {
              text: 'OK',
              onPress: () => {
                hideModal();
              },
              isFocused: true,
            },
          ],
        });
      })
      .catch(error => {
        console.error('Language change error:', error);
      });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={changeLanguage}>
      <View style={styles.iconContainer}>
        <GlobeAltIconSolid size={24} color={'#ffffff'} />
      </View>
      <Text style={styles.languageText}>
        {i18n.language === 'tr' ? 'EN' : 'TR'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    backgroundColor: '#2E7D32',
    padding: 8,
    borderRadius: 50,
  },
  languageText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
    fontFamily: Fonts.Bold,
    textTransform: 'uppercase',
  },
});

export default SwitchLanguage;
