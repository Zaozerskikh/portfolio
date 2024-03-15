import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en_pages from '../locales/en/pages.json';
import en_buttons from '../locales/en/buttons.json';
import en_commons from '../locales/en/commons.json';

import rus_pages from '../locales/rus/pages.json';
import rus_buttons from '../locales/rus/buttons.json';
import rus_commons from '../locales/rus/commons.json';

const resources = {
  en: {
    translation: { ...en_buttons, ...en_pages, ...en_commons},
  },
  rus: {
    translation: { ...rus_buttons, ...rus_pages, ...rus_commons},
  },
};

const detectInitialLang = (): string => {
  try {
    return navigator.language.split('-')[0]
  } catch (err) {
    return 'en'
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: detectInitialLang(),
  supportedLngs: ['en', 'rus'],
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

export const toggleLang = () => {
  i18n.changeLanguage(i18n.language === 'en' ? 'rus' : 'en')
}