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
			<div className='homePage'>
				<section ref={ref} className='homePage'>
					{/* <img src={!isDarkMode ? moonDark : lightbulb} alt='Change mod' className='homePage-moon' onClick={toggleDarkMode} /> */}

					<h1 className='homePage-title'>Alexandre Saudemont</h1>
					<img src={profilePic} alt='profile' className='homePage-profilePic' />
					<div className='homePage-description-container'>
						<p className='homePage-description'>{t(`homePage.title`)}</p>
						<p className='homePage-description-dynamic'>{displayText}</p>
					</div>
					{/* <div className='homePage-links-container'>
					<p className={changeText ? 'homePage-links-text-clicked' : 'homePage-links-text'} onClick={toggleModalSkills}>
						{t(`homePage.skills`)}
					</p>
					{showModalSkills && <Skills />}

					<p className='homePage-links-text'>{t(`homePage.about`)}</p>
					<p className='homePage-links-text'>{t(`homePage.contact`)}</p>
					<div>
						<p className='homePage-links-text-project'>{t(`homePage.project`)}</p>
					</div>
				</div> */}

					<ul className='homePage-icon-social-container'>
						<a href='https://github.com/Alexandre-Saudemont' target='_blank' rel='noreferrer'>
							<img src={!isDarkMode ? github : githubDark} alt='github icon' className='homePage-github' />
						</a>
						<a href='https://www.linkedin.com/in/alexandre-saudemont-535481239/' target='_blank' rel='noreferrer'>
							<img src={!isDarkMode ? linkedin : linkedinDark} alt='linkedin icon' className='homePage-linkedin' />
						</a>
					</ul>
				</section>
			</div>
		</div>
	);
});

export default HomePage;
