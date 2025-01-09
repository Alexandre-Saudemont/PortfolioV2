import {useTranslation} from 'react-i18next';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch.js'; //
function Navbar() {
	const {t} = useTranslation();

	return (
		<nav class='navbar navbar-expand-lg bg-body-tertiary'>
			<div class='container-fluid'>
				<div class='collapse navbar-collapse' id='navbarNav'>
					<ul class='navbar-nav'>
						<li class='nav-item'>
							<a class='nav-link active' href='/Skills'>
								{t(`homePage.skills`)}
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='/About'>
								{t(`homePage.about`)}
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='/Contact'>
								{t(`homePage.contact`)}
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='/Projects'>
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
