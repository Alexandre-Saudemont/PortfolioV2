import React, {useContext} from 'react';
import reactIcon from '../../../../assets/img/react.svg';
import reactIconDark from '../../../../assets/img/react-dark.svg';
import javascriptIcon from '../../../../assets/img/js.svg';
import javascriptIconDark from '../../../../assets/img/js-dark.svg';
import htmlIcon from '../../../../assets/img/html5.svg';
import htmlIconDark from '../../../../assets/img/html5-dark.svg';
import cssIcon from '../../../../assets/img/css3.svg';
import cssIconDark from '../../../../assets/img/css3-dark.svg';
import {DarkModeContext} from '../../../DarkMode/DarkModeContext/DarkModeContext';
import './Skills.scss';

function Skills() {
	const {isDarkMode} = useContext(DarkModeContext);

	return (
		<React.Fragment>
			<div className='skills-front'>
				<img src={isDarkMode ? reactIconDark : reactIcon} alt='icon react' className='skills-front-icon-react' />
				<img src={isDarkMode ? javascriptIconDark : javascriptIcon} alt='icon javaScript' className='skills-front-icon-js' />
				<img src={isDarkMode ? htmlIconDark : htmlIcon} alt='icon html' className='skills-front-icon-html' />
				<img src={isDarkMode ? cssIconDark : cssIcon} alt='' className='skills-front-icon-css' />
			</div>
		</React.Fragment>
	);
}

export default Skills;
