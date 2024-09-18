import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/login/LoginScreen';
import RegisterScreen from '../../screens/login/RegisterScreen';
import ForgetPasswordScreen from '../../screens/login/ForgetPasswordScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
