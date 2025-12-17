/**
 * INTERNATIONALIZATION (i18n) CONFIGURATION
 * Uses react-i18next for multi-language support
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';

// Available languages
export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  // Add more languages here as translations become available
  // { code: 'fr', name: 'French', nativeName: 'Français' },
  // { code: 'zh', name: 'Chinese', nativeName: '中文' },
];

const resources = {
  en: { translation: enTranslations },
  es: { translation: esTranslations },
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',

    // Language detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'truthHunters_language',
    },

    interpolation: {
      escapeValue: false, // React already safes from XSS
    },

    // React-i18next specific options
    react: {
      useSuspense: true,
    },
  });

export default i18n;
