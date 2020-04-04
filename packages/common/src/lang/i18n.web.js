import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

let lng = window.navigator.language.slice(0, 2);

if (!lng) {
  lng = 'de';
}

const resources = {
  en: require('./translations/en.json'),
  de: require('./translations/de.json'),
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
