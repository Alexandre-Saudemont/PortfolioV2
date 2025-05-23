import React, {useRef} from 'react';
import ThemeProvider from './Components/DarkMode/ThemeProvider/ThemeProvider';
import Navbar from './Components/Navbar/Navbar.js';
import HomePage from './Components/pages/HomePage/HomePage.js';
import Skills from './Components/pages/Skills/Skills.js';
import AboutPage from './Components/pages/AboutPage/AboutPage.js';
import ContactPage from './Components/pages/ContactPage/ContactPage';
import ProjectsPage from './Components/pages/ProjectsPage/ProjectsPage.js';
import ParticlesBackground from './Components/Particles/Particles.js';
import './App.scss';
import './i18n';

function App() {
	const homeRef = useRef(null);
	const skillsRef = useRef(null);
	const aboutRef = useRef(null);
	const contactRef = useRef(null);
	const projectsRef = useRef(null);

	return (
		<ThemeProvider>
			<ParticlesBackground />
			<div className={`App-container`}>
				<Navbar homeRef={homeRef} skillsRef={skillsRef} aboutRef={aboutRef} contactRef={contactRef} projectsRef={projectsRef} />
				<HomePage ref={homeRef} />
				<Skills ref={skillsRef} />
				<AboutPage ref={aboutRef} />
				<ProjectsPage ref={projectsRef} />
				<ContactPage ref={contactRef} />
			</div>
		</ThemeProvider>
	);
}

export default App;
