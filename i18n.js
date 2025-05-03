import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n
  .use(resourcesToBackend((language, namespace) =>
    import(`./locales/${language}/${namespace}.json`)
  ))
  .use(initReactI18next)
  .init({
    resources: {
      en: {
          translation: require('./locales/en/translation.json'),
      },
      es: {
          translation: require('./locales/es/translation.json'),
      },
    },
    lng: 'es',
    fallbackLng: 'es',
    // supportedLngs: ['es', 'en'],
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, 
    },
  });

export default i18n;