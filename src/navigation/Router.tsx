import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './stack/HomeStack'; // Home stack'i çağırıyoruz
import AuthStack from './stack/AuthStack'; // Auth (Login, Register, ForgetPassword) stack'i
import {useDispatch, useSelector} from 'react-redux';
import {loginSuccess} from '../redux/slices/authSlice'; // Redux loginSuccess aksiyonu
import {storage} from '../utils/MMKV'; // MMKV depolama

const Router = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  useEffect(() => {
    const checkLoginStatus = () => {
      const loginStatus = storage.getString('loginstatus');
      const userEmail = storage.getString('userEmail');

      if (loginStatus === 'true' && userEmail) {
        dispatch(loginSuccess({email: userEmail, rememberMe: true}));
      }
    };

    checkLoginStatus();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
