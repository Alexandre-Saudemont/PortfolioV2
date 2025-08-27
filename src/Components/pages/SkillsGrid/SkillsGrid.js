import React, {useContext} from 'react';
import {DarkModeContext} from '../../DarkMode/DarkModeContext/DarkModeContext';
import './SkillsGrid.scss';

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

const skills = [
	{key: 'react', label: 'React', light: reactIcon, dark: reactIconDark},
	{key: 'js', label: 'JavaScript', light: javascriptIcon, dark: javascriptIconDark},
	{key: 'html', label: 'HTML 5', light: htmlIcon, dark: htmlIconDark},
	{key: 'css', label: 'CSS 3', light: cssIcon, dark: cssIconDark},
	{key: 'node', label: 'NodeJs', light: nodejs, dark: nodejsDark},
	{key: 'express', label: 'ExpressJs', light: expressJs, dark: expressjsDark},
	{key: 'psql', label: 'PostgreSQL', light: psql, dark: psqlDark},
];

const SkillsGrid = () => {
	const {isDarkMode} = useContext(DarkModeContext);

	return (
		<section className='skills-grid-container'>
			{skills.map((skill) => (
				<div key={skill.key} className='skill-card'>
					<div className='skill-card-inner'>
						<img src={isDarkMode ? skill.dark : skill.light} alt={`${skill.label} icon`} className='skill-icon' />
						<span className='skill-label'>{skill.label}</span>
					</div>
				</div>
			))}
		</section>
	);
};

export default SkillsGrid;
