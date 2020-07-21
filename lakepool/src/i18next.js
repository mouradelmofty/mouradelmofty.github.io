import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import common_en from './locale/en';
import common_fr from './locale/fr';


i18n.init({
    interpolation: {escapeValue: false},
    lng: 'en',
    resources: {
      en: {
          common: common_en
      },
      fr: {
        common: common_fr
      },
    },
});

export default i18n;
