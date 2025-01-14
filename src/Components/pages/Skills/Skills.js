import React, {useContext, forwardRef} from 'react';
import {DarkModeContext} from '../../DarkMode/DarkModeContext/DarkModeContext';
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

import './Skills.scss';

const Skills = forwardRef((orops, ref) => {
	const {isDarkMode} = useContext(DarkModeContext);

	return (
		<React.Fragment>
			<div className='skills-front' ref={ref}>
				<img src={isDarkMode ? reactIconDark : reactIcon} alt='icon react' className='skills-front-icon-react' />
				<span>ReactJs</span>
				<img src={isDarkMode ? javascriptIconDark : javascriptIcon} alt='icon javaScript' className='skills-front-icon-js' />
				<span>JavaScript</span>
				<img src={isDarkMode ? htmlIconDark : htmlIcon} alt='icon html' className='skills-front-icon-html' />
				<span>HTML 5</span>
				<img src={isDarkMode ? cssIconDark : cssIcon} alt='' className='skills-front-icon-css' />
				<span>CSS 3</span>

				<img src={isDarkMode ? nodejsDark : nodejs} alt='' className='skills-back-icon-nodejs' />
				<span>NodeJs</span>
				<img src={isDarkMode ? expressjsDark : expressJs} alt='' className='skills-back-icon-expressjs' />
				<span>ExpressJs</span>
				<img src={isDarkMode ? psqlDark : psql} alt='' className='skills-back-icon-psql' />
				<span>PostgreSQL</span>
			</div>
			<div className='skills-back' ref={ref}></div>
		</React.Fragment>
	);
});

export default Skills;
