import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch.js';
import {DarkModeContext} from '../DarkMode/DarkModeContext/DarkModeContext.js';
import moonDark from '../../assets/img/moon-dark.svg';
import lightbulb from '../../assets/img/lightbulb.svg';
import './Navbar.scss';

function Navbar({homeRef, aboutRef, contactRef, projectsRef}) {
	const {t} = useTranslation();
	const {isDarkMode, setDarkMode} = useContext(DarkModeContext);

	const toggleDarkMode = () => setDarkMode(!isDarkMode);

	const navItems = [
		{label: t('homePage.home'), href: '#home'},
		{label: t('homePage.about'), href: '#about'},
		{label: t('homePage.project'), href: '#projects'},
		{label: t('homePage.contact'), href: '#contact'},
	];

	const renderNavLinks = () =>
		navItems.map((item, index) => (
			<li key={index} className='nav-item'>
				<a className='nav-link' href={item.href}>
					{item.label}
				</a>
			</li>
		));

	return (
		<>
			{/* Top bar (language + dark mode) */}
			<div className='navbar-top'>
				<div className='navbar-settings'>
					<LanguageSwitch />
					<img src={!isDarkMode ? moonDark : lightbulb} alt='Toggle dark mode' className='dark-mode-toggle' onClick={toggleDarkMode} />
				</div>
			</div>

			{/* Desktop navbar */}
			<header className='header-top'>
				<nav className='container navbar-container'>
					<div className='logo'>AS</div>
					<ul className='nav-links'>{renderNavLinks()}</ul>
				</nav>
			</header>

			{/* Mobile sticky navbar */}
			<nav className={`navbar-sticky ${isDarkMode ? 'darkMode' : 'lightMode'}`}>
				<ul className='nav-list'>{renderNavLinks()}</ul>
			</nav>
		</>
	);
}

export default Navbar;
