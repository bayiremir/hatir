import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as locales from './locales';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    debug: false,
    fallbackLng: 'tr',
    resources: {
      ...Object.entries(locales).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: {
            translation: value,
          },
        }),
        {},
      ),
    },
    lng: 'tr',
  })
  .then(function (t) {
    t('key');
  })
  .catch(err => console.log('i18n error:', err));

export default i18n;
