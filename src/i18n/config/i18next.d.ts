import 'react-i18next';

import en_pages from '../locales/en/pages.json';
import en_buttons from '../locales/en/buttons.json';
import en_commons from '../locales/en/commons.json';
import en_meta from '../locales/en/meta.json'

import rus_pages from '../locales/rus/pages.json';
import rus_buttons from '../locales/rus/buttons.json';
import rus_commons from '../locales/rus/commons.json';
import rus_meta from '../locales/rus/meta.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: typeof en_pages & typeof en_commons & typeof en_buttons & typeof en_meta;
      rus: typeof rus_pages & typeof rus_commons & typeof rus_buttons & typeof rus_meta;
    };
  }
}
