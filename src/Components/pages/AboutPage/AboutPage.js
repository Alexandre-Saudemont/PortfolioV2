import React from 'react';
import {useLocation} from 'react-router-dom';
import './AboutPage.scss';

function AboutPage() {
	const location = useLocation();
	const darkMode = location.state?.darkMode === true;

	return (
		<section className={`homePage ${!darkMode ? 'lightMod' : 'darkMod'}`}>
			<h1 className='aboutPage-title'>Hello ! My name is Alexandre Saudemont </h1>
			<h2 className='aboutPage-subtitle'>Developer Web FullStack</h2>
			<section className='aboutPage-section'>
				<p className='aboutPage-text'>
					Fascinated by computers since I was little and after several years in administration without any real advancement in my career, I
					decided to convert to web development.
				</p>
				<p className='aboutPage-text'>
					I started by training myself as an autodidact, then I looked for training in order to improve my skills and that's how I found
					myself on my way to the 100% remote school O'Clock.
				</p>
				<p className='aboutPage-text'>I studied at O'Clock from January 17, 2022 until July 02, 2022.</p>
				<p className='aboutPage-text'>
					The program consisted of 3 months of "Basic" to learn the basics of development in JavaScript, 1 month of specialization on React
					and 1 month for a professional project.
				</p>
				<p className='aboutPage-text'>I was Front-End developer on the project.</p>
			</section>
		</section>
	);
}

export default AboutPage;
