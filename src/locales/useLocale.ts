import { I18n } from 'i18n-js';
import { locale } from 'expo-localization';
import { ru } from './ru';
import { en } from './en';

const translations = {
  en,
  ru,
};

export const i18n = new I18n(translations);

i18n.locale = locale;
i18n.enableFallback = true;

export const useLocale = () => {
  const t = i18n.t.bind(i18n);
  return { t };
};
