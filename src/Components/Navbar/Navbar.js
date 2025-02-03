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
		<nav className={`navbar navbar-expand-lg fixed-top ${isDarkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}`}>
			<div className='container-fluid'>
				<div className='position-absolute end-0 top-0 p-custom me-1 me-sm-0'>
					<LanguageSwitch />
				</div>
				<div className='position-absolute end-0 top-0 '>
					<img src={!isDarkMode ? moonDark : lightbulb} alt='Change mod' className='homePage-moon' onClick={toggleDarkMode} />
				</div>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav me-auto'>
						<li className='nav-item'>
							<span
								className='nav-link'
								href='#Home'
								data-bs-toggle='collapse'
								data-bs-target='#navbarNav'
								onClick={(e) => handleScroll(homeRef)}>
								{t(`homePage.home`)}
							</span>
						</li>
						<li className='nav-item'>
							<span
								className='nav-link'
								href='#Skills'
								data-bs-toggle='collapse'
								data-bs-target='#navbarNav'
								onClick={(e) => handleScroll(skillsRef)}>
								{t(`homePage.skills`)}
							</span>
						</li>
						<li className='nav-item'>
							<span
								className='nav-link'
								href='#About'
								data-bs-toggle='collapse'
								data-bs-target='#navbarNav'
								onClick={(e) => handleScroll(aboutRef)}>
								{t(`homePage.about`)}
							</span>
						</li>
						<li className='nav-item'>
							<span
								className='nav-link'
								href='#Contact'
								data-bs-toggle='collapse'
								data-bs-target='#navbarNav'
								onClick={(e) => handleScroll(contactRef)}>
								{t(`homePage.contact`)}
							</span>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								href='#Projects'
								data-bs-toggle='collapse'
								data-bs-target='#navbarNav'
								onClick={(e) => handleScroll(projectsRef)}>
								{t(`homePage.project`)}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
