import React, {useContext, forwardRef} from 'react';
// import {useNavigate} from 'react-router-dom';

// import house from '../../../assets/img/house.svg';
// import houseDark from '../../../assets/img/house-dark.svg';
import {useTranslation} from 'react-i18next';

import './AboutPage.scss';

const AboutPage = forwardRef((props, ref) => {
	const {t} = useTranslation();

	// function navigateHome() {
	// 	navigate('/');
	// }

	const paragraphs = t(`aboutPage.paragraphs`, {returnObjects: true});

	return (
		<div className={`aboutPage`}>
			<section ref={ref} className='aboutPage'>
				{/* <img src={!isDarkMode ? house : houseDark} alt='icon house' className='aboutPage-iconHome' onClick={navigateHome} /> */}
				<h1 className='aboutPage-title'>{t(`aboutPage.title`)}</h1>

				<section className='aboutPage-text-container'>
					{paragraphs.map((paragraph, index) => (
						<p key={index} className='aboutPage-text'>
							{paragraph}
						</p>
					))}
				</section>
			</section>
		</div>
	);
});

export default AboutPage;
