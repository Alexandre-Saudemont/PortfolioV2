import React, {useRef, useEffect} from 'react';
import ThemeProvider from './Components/DarkMode/ThemeProvider/ThemeProvider';
import Navbar from './Components/Navbar/Navbar.js';
import HomePage from './Components/pages/HomePage/HomePage.js';
import AboutPage from './Components/pages/AboutPage/AboutPage.js';
import ContactPage from './Components/pages/ContactPage/ContactPage';
import ProjectsPage from './Components/pages/ProjectsPage/ProjectsPage.js';
import ParticlesBackground from './Components/Particles/Particles.js';
import './App.scss';
import './i18n';

function App() {
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const contactRef = useRef(null);
	const projectsRef = useRef(null);

	useEffect(() => {
		const cursor = document.querySelector('.cursor');
		function onMouseMove(e) {
			if (cursor) {
				cursor.style.left = e.clientX + 'px';
				cursor.style.top = e.clientY + 'px';
			}
		}
		window.addEventListener('mousemove', onMouseMove);
		return () => window.removeEventListener('mousemove', onMouseMove);
	}, []);

	return (
		<ThemeProvider>
			<ParticlesBackground />
			<div className={`App-container`}>
				{/* Custom cursor and grid background */}
				<div className='cursor'></div>
				<div className='grid-background'></div>

				<Navbar homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} projectsRef={projectsRef} />
				<HomePage ref={homeRef} />
				<AboutPage ref={aboutRef} />
				<ProjectsPage ref={projectsRef} />
				<ContactPage ref={contactRef} />
			</div>
		</ThemeProvider>
	);
}

export default App;
