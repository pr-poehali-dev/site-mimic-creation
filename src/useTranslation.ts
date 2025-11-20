import { translations, type LanguageCode } from './translations';

export const useTranslation = (lang: LanguageCode) => {
  const t = translations[lang] || translations.en;
  return { t, lang };
};

export const languages = [
  { countryCode: 'US', code: 'en', name: 'English' },
  { countryCode: 'DE', code: 'de', name: 'Deutsch' },
  { countryCode: 'SE', code: 'sv', name: 'Svenska' }
] as const;