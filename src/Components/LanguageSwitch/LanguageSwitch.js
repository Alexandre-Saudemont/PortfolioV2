import React from 'react';
import {useTranslation} from 'react-i18next';
import './LanguageSwitch.scss';

function LanguageSwitch() {
	const {i18n} = useTranslation();

	function switchLanguage() {
		const newLanguage = i18n.language === 'fr' ? 'en' : 'fr';
		i18n.changeLanguage(newLanguage);
	}

	return (
		<button className='LanguageSwitch-button' onClick={switchLanguage}>
			{i18n.language === 'fr' ? 'English' : 'Français'}
		</button>
	);
}

export default LanguageSwitch;
