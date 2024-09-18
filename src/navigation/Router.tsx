import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './stack/HomeStack'; // Home stack'i çağırıyoruz
import AuthStack from './stack/AuthStack'; // Auth (Login, Register, ForgetPassword) stack'i
import {useSelector} from 'react-redux';

const Router = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
