import React from 'react';
import {useTranslation} from 'react-i18next';
import './LanguageSwitch.scss';

function LanguageSwitch() {
	const {i18n} = useTranslation();

	function switchLanguage(event) {
		const selectedLanguage = event.target.value;
		i18n.changeLanguage(selectedLanguage);
	}

	return (
		<div className='LanguageSwitch-container'>
			<select onChange={switchLanguage} value={i18n.language}>
				<option value='fr'>Français</option>
				<option value='en'>English</option>
				<option value='CN'>中文</option>
			</select>
		</div>
	);
}

export default LanguageSwitch;
