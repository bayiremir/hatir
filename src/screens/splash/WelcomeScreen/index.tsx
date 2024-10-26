import React from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
  runOnJS, // UI thread dışına yönlendirme için eklenir
} from 'react-native-reanimated';
import {styles} from './styles';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const translateX = useSharedValue(0);

  // Gesture handler to detect swiping
  const gestureHandler = useAnimatedGestureHandler({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: event => {
      if (event.translationX < -50) {
        // UI thread üzerinde olmayan fonksiyonları runOnJS ile çağır
        runOnJS(navigation.navigate)('ChangeLanguage');
      } else {
        translateX.value = withSpring(0); // Eski konumuna dön
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={styles.container}>
        <View style={styles.top}></View>
        <Image
          style={styles.logo}
          source={require('../../../../assets/appicon/greenlogo.png')}
        />
        <View style={styles.bottom}></View>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default WelcomeScreen;
