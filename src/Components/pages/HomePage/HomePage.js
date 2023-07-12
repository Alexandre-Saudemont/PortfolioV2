import React, {useState, useEffect} from 'react';
import profilePic from '../../../assets/img/profile-picV2.jpg';
import github from '../../../assets/img/github.svg';
import linkedin from '../../../assets/img/linkedin.svg';
import './HomePage.scss';

function HomePage() {
	const [textIndex, setTextIndex] = React.useState(0);
	const texts = ['Je suis Développeur FullStack JavaScript', 'Je suis Développeur Web', 'Je suis Développeur Front-End'];

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTextIndex((textIndex) => (textIndex + 1) % texts.length);
		}, 3000);

		return () => clearInterval(intervalId);
	}, [texts.length]);

	return (
		<>
			<section className='homePage'>
				<h1 className='homePage-title'>Alexandre Saudemont</h1>

				<img src={profilePic} alt='profile' className='homePage-profilePic' />

				{texts.map((text, index) => (
					<p key={index} className={`homePage-description ${textIndex === index ? 'show' : ''}`}>
						{text}
					</p>
				))}

				<ul className='homePage-links'>
					<a href='https://github.com/Alexandre-Saudemont' target='_blank' rel='noreferrer'>
						<li>
							<img src={github} alt='github icon' className='homePage-github' />
						</li>
					</a>
					<a href='https://www.linkedin.com/in/alexandre-saudemont-535481239/' target='_blank' rel='noreferrer'>
						<li>
							<img src={linkedin} alt='linkedin icon' className='homePage-linkedin' />
						</li>
					</a>
				</ul>
			</section>
		</>
	);
}

export default HomePage;
