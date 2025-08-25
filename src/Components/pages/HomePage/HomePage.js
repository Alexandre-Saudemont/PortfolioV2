import React, {useState, useEffect, useContext, forwardRef} from 'react';
import profilePic from '../../../assets/img/profile-picV2.jpg';
import github from '../../../assets/img/github.svg';
import githubDark from '../../../assets/img/github-dark.svg';
import linkedin from '../../../assets/img/linkedin.svg';
import linkedinDark from '../../../assets/img/linkedin-dark.svg';
// import moonDark from '../../../assets/img/moon-dark.svg';
// import lightbulb from '../../../assets/img/lightbulb.svg';
// import Skills from '../Skills/Skills.js';
import {DarkModeContext} from '../../DarkMode/DarkModeContext/DarkModeContext';
import {useTranslation} from 'react-i18next';

import './HomePage.scss';

const HomePage = forwardRef((props, ref) => {
	const {t, i18n} = useTranslation();
	const [textIndex, setTextIndex] = useState(0);
	const [displayText, setDisplayText] = useState('');
	const [clearing, setClearing] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	// const [showModalSkills, setShowModalSkills] = useState(false);
	// const [changeText, setText] = useState(false);
	const {isDarkMode} = useContext(DarkModeContext);
	const texts = t('homePage.typingTexts', {returnObjects: true});

	// function toggleDarkMode() {
	// 	setDarkMode(!isDarkMode);
	// }

	// function toggleModalSkills() {
	// 	setShowModalSkills(!showModalSkills);
	// 	setText(!changeText);
	// }

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsMounted(true);
		}, 1300);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		setTextIndex(0);
		setDisplayText('');
	}, [i18n.language]);

	useEffect(() => {
		if (!isMounted) return;

		const typeText = () => {
			if (!clearing) {
				if (displayText.length < texts[textIndex].length) {
					setDisplayText((prev) => prev + texts[textIndex][displayText.length]);
				} else {
					setClearing(true);
				}
			} else {
				if (displayText.length > 0) {
					setDisplayText((prev) => prev.slice(0, -1));
				} else {
					setClearing(false);
					setTextIndex((prev) => (prev + 1) % texts.length);
				}
			}
		};

		const delay = clearing ? 120 : 180;
		const timer = setTimeout(typeText, delay);

		return () => clearTimeout(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clearing, displayText, textIndex, isMounted]);

	return (
		<div className={`homePage-container`}>
			<section ref={ref} id='home' className='container hero'>
				<div className='hero-content'>
					<h1>
						{t('homePage.hero.titlePrefix', "Salut, je m'appelle")} <span className='highlight'>Alexandre Saudemont</span>
					</h1>
					<p>{t('homePage.hero.subtitle', 'Développeur full-stack passionné par les belles expériences numériques')}</p>
					<a href='#projects' className='cta-button'>
						{t('homePage.hero.cta', 'Voir mes projets')}
					</a>
				</div>
				<div className='hero-visual'>
					<div className='card'>
						<h3>{t('homePage.hero.cards.frontend.title', 'Frontend')}</h3>
						<p>{t('homePage.hero.cards.frontend.desc', 'React, Vue, TypeScript')}</p>
					</div>
					<div className='card'>
						<h3>{t('homePage.hero.cards.backend.title', 'Backend')}</h3>
						<p>{t('homePage.hero.cards.backend.desc', 'Node.js, Python, Go')}</p>
					</div>
					<div className='card'>
						<h3>{t('homePage.hero.cards.devops.title', 'DevOps')}</h3>
						<p>{t('homePage.hero.cards.devops.desc', 'Docker, AWS, CI/CD')}</p>
					</div>
				</div>
			</section>
		</div>
	);
});

export default HomePage;
