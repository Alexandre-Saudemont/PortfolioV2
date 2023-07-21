import React from 'react';
import reactIcon from '../../../../assets/img/react.svg';
import reactIconDark from '../../../../assets/img/react-dark.svg';
import javascriptIcon from '../../../../assets/img/js.svg';
import javascriptIconDark from '../../../../assets/img/js-dark.svg';
import htmlIcon from '../../../../assets/img/html5.svg';
import htmlIconDark from '../../../../assets/img/html5-dark.svg';
import cssIcon from '../../../../assets/img/css3.svg';
import cssIconDark from '../../../../assets/img/css3-dark.svg';
import './Skills.scss';

function Skills({darkMode}) {
	return (
		<React.Fragment>
			<div className='skills-front'>
				<img src={darkMode === 'lightMod' ? reactIconDark : reactIcon} alt='icon react' className='skills-front-icon-react' />
				<img src={darkMode === 'lightMod' ? javascriptIconDark : javascriptIcon} alt='icon javaScript' className='skills-front-icon-js' />
				<img src={darkMode === 'lightMod' ? htmlIconDark : htmlIcon} alt='icon html' className='skills-front-icon-html' />
				<img src={darkMode === 'lightMod' ? cssIconDark : cssIcon} alt='' className='skills-front-icon-css' />
			</div>
		</React.Fragment>
	);
}

export default Skills;
