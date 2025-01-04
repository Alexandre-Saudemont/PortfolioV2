import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(HttpApi)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ['en', 'fr', 'CN'],
		fallbackLng: 'fr',
		debug: true,
		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath: '/locales/{{lng}}/{{lng}}.json', // Chemin vers les fichiers de traduction
		},
	});

console.log('i18n options:', i18n.options);
export default i18n;
