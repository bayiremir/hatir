import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/i18n';
import {CustomModalProvider} from './src/components/other_components/Modal/CustomModal/CustomModalProvider';
import {storage} from './src/utils/MMKV';
import Lottie from './src/components/other_components/Lottie';
import Router from './src/navigation/Router';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeStack from './src/navigation/stack/WelcomeStack';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(false);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const savedLanguage = storage.getString('appLanguage');
      const firstLaunchFlag = storage.getBoolean('isFirstLaunch');

      if (firstLaunchFlag === null || firstLaunchFlag === true) {
        setIsFirstLaunch(true);
        storage.set('isFirstLaunch', false);
      } else {
        if (savedLanguage && savedLanguage !== i18n.language) {
          await i18n.changeLanguage(savedLanguage);
        }
      }
      setIsLoading(false);
    };

    checkFirstLaunch();
  }, []);

  if (isLoading) {
    return <Lottie />;
  }

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <CustomModalProvider>
          <NavigationContainer>
            {!isFirstLaunch ? (
              <WelcomeStack setIsFirstLaunch={setIsFirstLaunch} />
            ) : (
              <Router />
            )}
          </NavigationContainer>
        </CustomModalProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
