import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DarkModeContext} from '../DarkMode/DarkModeContext/DarkModeContext.js';
import moonDark from '../../assets/img/moon-dark.svg';
import lightbulb from '../../assets/img/lightbulb.svg';
import './Navbar.scss';

function Navbar({homeRef, skillsRef, aboutRef, contactRef, projectsRef}) {
	const {t} = useTranslation();
	const {isDarkMode, setDarkMode} = useContext(DarkModeContext);

	function toggleDarkMode() {
		setDarkMode(!isDarkMode);
	}

	const handleScroll = (ref) => {
		if (ref.current) {
			ref.current.scrollIntoView({behavior: 'smooth'});
		}
	};

	return (
		<>
			{/* Header (langue + dark mode) */}
			<div className='navbar-top'>
				<div className='navbar-settings'>
					<LanguageSwitch />
					<img src={!isDarkMode ? moonDark : lightbulb} alt='Toggle dark mode' className='dark-mode-toggle' onClick={toggleDarkMode} />
				</div>
			</div>

			{/* Menu sticky en bas (mobile-first) */}
			<nav className={`navbar-sticky ${isDarkMode ? 'darkMode' : 'lightMode'}`}>
				<ul className='nav-list'>
					<li className='nav-item' onClick={() => handleScroll(homeRef)}>
						<span className='nav-link'>{t('homePage.home')}</span>
					</li>
					<li className='nav-item' onClick={() => handleScroll(skillsRef)}>
						<span className='nav-link'>{t('homePage.skills')}</span>
					</li>
					<li className='nav-item' onClick={() => handleScroll(aboutRef)}>
						<span className='nav-link'>{t('homePage.about')}</span>
					</li>
					<li className='nav-item' onClick={() => handleScroll(projectsRef)}>
						<span className='nav-link'>{t('homePage.project')}</span>
					</li>
					<li className='nav-item' onClick={() => handleScroll(contactRef)}>
						<span className='nav-link'>{t('homePage.contact')}</span>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
