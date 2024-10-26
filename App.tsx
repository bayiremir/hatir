import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/i18n';
import {CustomModalProvider} from './src/components/other_components/Modal/CustomModal/CustomModalProvider';
import Lottie from './src/components/other_components/Lottie';
import Router from './src/navigation/Router';
import WelcomeStack from './src/navigation/stack/WelcomeStack';
import {storage} from './src/utils/MMKV'; // MMKV depolama
import NewNotification from './src/components/other_components/other/NewNotification';
import Toast, {ErrorToast} from 'react-native-toast-message';

export const toastConfig = {
  error: (props: any) => <ErrorToast {...props} text2NumberOfLines={3} />,
  notification: ({
    props,
  }: {
    props: {
      notificationTitle: string;
      notificationBody: string;
      onPress: () => void;
    };
  }) => <NewNotification props={props} />,
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(false);

  useEffect(() => {
    const checkAppState = async () => {
      const savedLanguage = storage.getString('appLanguage');
      const firstLaunchFlag = storage.getBoolean('isFirstLaunch');

      if (
        firstLaunchFlag === null ||
        firstLaunchFlag === true ||
        firstLaunchFlag === undefined
      ) {
        setIsFirstLaunch(true);
        storage.set('isFirstLaunch', false);
      } else {
        // Eğer dil ayarı kaydedilmişse onu uygula
        if (savedLanguage && savedLanguage !== i18n.language) {
          await i18n.changeLanguage(savedLanguage);
        }
      }

      setIsLoading(false);
    };

    checkAppState();
  }, []);

  if (isLoading) {
    return <Lottie />;
  }

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <CustomModalProvider>
          {isFirstLaunch ? (
            <WelcomeStack setIsFirstLaunch={setIsFirstLaunch} />
          ) : (
            <Router />
          )}
          <Toast config={toastConfig} />
        </CustomModalProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
