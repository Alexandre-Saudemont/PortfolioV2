// Components/Navbar/Navbar.js
import {useTranslation} from 'react-i18next';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch.js';

function Navbar({homeRef, skillsRef, aboutRef, projectsRef}) {
	const {t} = useTranslation();

	const handleScroll = (ref) => {
		if (ref.current) {
			ref.current.scrollIntoView({behavior: 'smooth'});
		}
	};

	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary fixed-top'>
			<div className='container-fluid'>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav' navbar-nav-scroll>
						<li className='nav-item'>
							<a className='nav-link' href='#Home' onClick={(e) => handleScroll(homeRef)}>
								{t(`homePage.home`)}
							</a>
						</li>
						<li className='nav-item' navbar-nav-scroll>
							<a className='nav-link' href='#Skills' onClick={(e) => handleScroll(skillsRef)}>
								{t(`homePage.skills`)}
							</a>
						</li>
						<li className='nav-item' navbar-nav-scroll>
							<a className='nav-link' href='#About' onClick={(e) => handleScroll(aboutRef)}>
								{t(`homePage.about`)}
							</a>
						</li>
						<li className='nav-item' navbar-nav-scroll>
							<a className='nav-link' href='#Contact' onClick={(e) => handleScroll(aboutRef)}>
								{t(`homePage.contact`)}
							</a>
						</li>
						<li className='nav-item' navbar-nav-scroll>
							<a className='nav-link' href='#Projects' onClick={(e) => handleScroll(projectsRef)}>
								{t(`homePage.project`)}
							</a>
						</li>
					</ul>
					<LanguageSwitch />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
