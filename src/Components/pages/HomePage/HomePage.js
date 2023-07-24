import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import profilePic from '../../../assets/img/profile-picV2.jpg';
import github from '../../../assets/img/github.svg';
import githubDark from '../../../assets/img/github-dark.svg';
import linkedin from '../../../assets/img/linkedin.svg';
import linkedinDark from '../../../assets/img/linkedin-dark.svg';
import moonDark from '../../../assets/img/moon-dark.svg';
import lightbulb from '../../../assets/img/lightbulb.svg';
import Skills from './Skills/Skills.js';

import './HomePage.scss';

function HomePage() {
	const [textIndex, setTextIndex] = useState(0);
	const texts = ['FullStack JavaScript', '  Web', 'Front-End'];
	const [displayText, setDisplayText] = useState('');
	const [clearing, setClearing] = useState(false);
	const [isMounted, setIsMounted] = useState(false); // new state
	const [isDarkMode, setDarkMode] = useState(false);
	const [showModalSkills, setShowModalSkills] = useState(false);
	const navigate = useNavigate();

	function toggleDarkMode() {
		setDarkMode(!isDarkMode);
	}

	function toggleModalSkills() {
		setShowModalSkills(!showModalSkills);
	}

	function handleAboutDarkMode() {
		navigate('/About', {state: {darkMode: isDarkMode}});
	}
	const darkMode = isDarkMode ? 'lightMod' : 'darkMod';

	// set isMounted to true after the component has mounted
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsMounted(true);
		}, 1300); // delay before starting typing animation

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (!isMounted) return; // do not start typing animation until component is mounted

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

		const delay = clearing ? 120 : 180; // adjust timing here
		const timer = setTimeout(typeText, delay);

		return () => clearTimeout(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clearing, displayText, textIndex, isMounted]); // add isMounted to dependency array

	return (
		<>
			<section className={`homePage ${darkMode}`}>
				<img src={isDarkMode ? lightbulb : moonDark} alt='Change mod' className='homePage-moon' onClick={toggleDarkMode} />

				<h1 className='homePage-title'>Alexandre Saudemont</h1>
				<img src={profilePic} alt='profile' className='homePage-profilePic' />
				<div className='homePage-descritpion-container'>
					<p className='homePage-description'>I'm a Developper</p>
					<p className='homePage-description-dynamic'>{displayText}</p>
				</div>
				<div className='homePage-links-container'>
					<p className='homePage-links-text' onClick={toggleModalSkills}>
						Skills
					</p>
					{showModalSkills && <Skills darkMode={darkMode} />}

					<Link className='homePage-links-text' to='/About' onClick={handleAboutDarkMode}>
						About
					</Link>
					<p className='homePage-links-text'>Contact</p>
				</div>
				<ul className='homePage-icon-social-container'>
					<a href='https://github.com/Alexandre-Saudemont' target='_blank' rel='noreferrer'>
						<li>
							<img src={!isDarkMode ? github : githubDark} alt='github icon' className='homePage-github' />
						</li>
					</a>
					<a href='https://www.linkedin.com/in/alexandre-saudemont-535481239/' target='_blank' rel='noreferrer'>
						<li>
							<img src={!isDarkMode ? linkedin : linkedinDark} alt='linkedin icon' className='homePage-linkedin' />
						</li>
					</a>
				</ul>
			</section>
		</>
	);
}

export default HomePage;
