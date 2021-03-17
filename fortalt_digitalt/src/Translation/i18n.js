import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translations
import i18_en from "./en";
import i18_no from "./no";


// the translations
// (tip move them in a JSON file and import them)

const resources = {
	en: {
		translation: i18_en
	},
	no: {
		translation: i18_no
	},
	nb: {
		translation: i18_no
	},
	nn: {
		translation: i18_no
	},
};

const detection_options = {
	order: ['localStorage', 'navigator'],
  	caches: ['localStorage']
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		detection: detection_options,
		resources,
		fallbackLng: 'en',

		keySeparator: false,

		interpolation: {
			escapeValue: false
		}
  });

  export default i18n;