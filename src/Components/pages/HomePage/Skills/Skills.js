import React from 'react';
import reactIcon from '../../../../assets/img/react.svg';
import reactIconDark from '../../../../assets/img/react-dark.svg';
import javascriptIcon from '../../../../assets/img/js.svg';
import javascriptIconDark from '../../../../assets/img/js-dark.svg';
import htmlIcon from '../../../../assets/img/html5.svg';
import htmlIconDark from '../../../../assets/img/html5-dark.svg';
import './Skills.scss';

function Skills({darkMode}) {
	return (
		<div className='skills'>
			<img src={darkMode === 'lightMod' ? reactIconDark : reactIcon} alt='icon react' className='skills-icon-react' />
			<img src={darkMode === 'lightMod' ? javascriptIconDark : javascriptIcon} alt='icon javaScript' className='skills-icon-js' />
			<img src={darkMode === 'lightMod' ? htmlIconDark : htmlIcon} alt='icon html' className='skills-icon-html' />
		</div>
	);
}

export default Skills;
