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
		<div className='languageSwitch-container'>
			<select className='languageSwitch-select' onChange={switchLanguage} value={i18n.language}>
				<option value='fr'>FR</option>
				<option value='en'>EN</option>
				<option value='CN'>中文</option>
			</select>
		</div>
	);
}

export default LanguageSwitch;
