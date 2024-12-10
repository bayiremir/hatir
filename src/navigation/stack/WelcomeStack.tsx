import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../../screens/splash/WelcomeScreen';
import ChangeLanguageScreen from '../../screens/splash/ChangeLanguageScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const WelcomeStack = ({
  setIsFirstLaunch,
}: {
  setIsFirstLaunch: (value: boolean) => void;
}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />

        <Stack.Screen name="ChangeLanguage">
          {props => (
            <ChangeLanguageScreen
              {...props}
              setIsFirstLaunch={setIsFirstLaunch}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WelcomeStack;
