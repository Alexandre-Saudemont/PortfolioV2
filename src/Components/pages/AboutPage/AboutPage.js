import React, {useContext, forwardRef, useState} from 'react';
// import {useNavigate} from 'react-router-dom';

// import house from '../../../assets/img/house.svg';
// import houseDark from '../../../assets/img/house-dark.svg';
import {useTranslation} from 'react-i18next';

import './AboutPage.scss';
import {DarkModeContext} from '../../DarkMode/DarkModeContext/DarkModeContext';
import SkillsGrid from '../SkillsGrid/SkillsGrid.js';
import reactIcon from '../../../assets/img/react.svg';
import reactIconDark from '../../../assets/img/react-dark.svg';
import javascriptIcon from '../../../assets/img/js.svg';
import javascriptIconDark from '../../../assets/img/js-dark.svg';
import htmlIcon from '../../../assets/img/html5.svg';
import htmlIconDark from '../../../assets/img/html5-dark.svg';
import cssIcon from '../../../assets/img/css3.svg';
import cssIconDark from '../../../assets/img/css3-dark.svg';
import nodejs from '../../../assets/img/node-js-dark.svg';
import nodejsDark from '../../../assets/img/node-js.svg';
import expressJs from '../../../assets/img/expressjs.svg';
import expressjsDark from '../../../assets/img/expressjs-dark.svg';
import psql from '../../../assets/img/psql.svg';
import psqlDark from '../../../assets/img/psql-dark.svg';

const AboutPage = forwardRef((props, ref) => {
	const {t} = useTranslation();
	const {isDarkMode} = useContext(DarkModeContext);
	const [isFlipped, setIsFlipped] = useState({});

	const flipItems = [
		{key: 'react', label: 'React', light: reactIcon, dark: reactIconDark},
		{key: 'js', label: 'JavaScript', light: javascriptIcon, dark: javascriptIconDark},
		{key: 'html', label: 'HTML 5', light: htmlIcon, dark: htmlIconDark},
		{key: 'css', label: 'CSS 3', light: cssIcon, dark: cssIconDark},
		{key: 'node', label: 'NodeJs', light: nodejs, dark: nodejsDark},
		{key: 'express', label: 'ExpressJs', light: expressJs, dark: expressjsDark},
		{key: 'psql', label: 'PostgreSQL', light: psql, dark: psqlDark},
	];

	function handleFlip(key) {
		setIsFlipped((prev) => ({...prev, [key]: !prev[key]}));
	}

	// function navigateHome() {
	// 	navigate('/');
	// }

	const paragraphs = t(`aboutPage.paragraphs`, {returnObjects: true});

	return (
		<div className={`aboutPage`}>
			<section ref={ref} id='about' className='about container'>
				<h2>About Me</h2>
				<section className='aboutPage-text-container'>
					{paragraphs.map((paragraph, index) => (
						<p key={index} className='aboutPage-text'>
							{paragraph}
						</p>
					))}
				</section>
				<SkillsGrid />
			</section>
		</div>
	);
});

export default AboutPage;
