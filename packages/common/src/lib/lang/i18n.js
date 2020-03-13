import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const locales = RNLocalize.getLocales();
let lng = 'en';

if (locales.length) {
  lng = locales[0].languageCode;
}

// the translations
// (tip move them in a JSON file and import them)
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
