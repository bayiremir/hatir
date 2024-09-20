import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles'; // Style dosyasını burada tanımlıyoruz.
import {ArrowRightIcon as ArrowRightIconSolid} from 'react-native-heroicons/solid';
const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('ChangeLanguage'); // ChangeLanguageScreen'e yönlendirme
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <Image
        source={require('../../../../assets/appicon/greenlogo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Hoş Geldiniz!</Text>

      <TouchableOpacity style={styles.arrowButton} onPress={handleNext}>
        <ArrowRightIconSolid size={32} color={'black'} />
      </TouchableOpacity>
      <View style={styles.bottom}></View>
    </View>
  );
};

export default WelcomeScreen;
