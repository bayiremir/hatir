import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/i18n';
import {CustomModalProvider} from './src/components/other_components/Modal/CustomModal/CustomModalProvider';
import {storage} from './src/utils/MMKV';
import Lottie from './src/components/other_components/Lottie';
import Router from './src/navigation/Router';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = storage.getString('appLanguage');
      if (savedLanguage && savedLanguage !== i18n.language) {
        await i18n.changeLanguage(savedLanguage);
      }
      setIsLoading(false);
    };

    loadLanguage();
  }, []);

  if (isLoading) {
    return <Lottie />;
  }

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <CustomModalProvider>
          <Router />
        </CustomModalProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
