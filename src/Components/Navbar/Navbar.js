import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DarkModeContext} from '../DarkMode/DarkModeContext/DarkModeContext.js';
import moonDark from '../../assets/img/moon-dark.svg';
import lightbulb from '../../assets/img/lightbulb.svg';
import './Navbar.scss';

function Navbar({homeRef, aboutRef, contactRef, projectsRef}) {
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

			{/* New header with logo and links */}
			<header className='header-top'>
				<nav className='container navbar-container'>
					<div className='logo'>AS</div>
					<ul className='nav-links'>
						<li className='nav-item'>
							<a className='nav-link' href='#home'>
								{t('homePage.home')}
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#about'>
								{t('homePage.about')}
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#projects'>
								{t('homePage.project')}
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#contact'>
								{t('homePage.contact')}
							</a>
						</li>
					</ul>
				</nav>
			</header>

			{/* Mobile sticky menu (fallback) */}
			<nav className={`navbar-sticky ${isDarkMode ? 'darkMode' : 'lightMode'}`}>
				<ul className='nav-list'>
					<li className='nav-item'>
						<a className='nav-link' href='#home'>
							{t('homePage.home')}
						</a>
					</li>
					<li className='nav-item'>{/* Skills removed; flip-cards moved under About */}</li>
					<li className='nav-item'>
						<a className='nav-link' href='#about'>
							{t('homePage.about')}
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#projects'>
							{t('homePage.project')}
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#contact'>
							{t('homePage.contact')}
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
