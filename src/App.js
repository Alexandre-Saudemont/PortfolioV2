import React from 'react';
import ThemeProvider from './Components/DarkMode/ThemeProvider/ThemeProvider';
import Navbar from './Components/Navbar/Navbar.js';
import HomePage from './Components/pages/HomePage/HomePage.js';
import Skills from './Components/pages/Skills/Skills.js';
import AboutPage from './Components/pages/AboutPage/AboutPage.js';
import ProjectsPage from './Components/pages/ProjectsPage/ProjectsPage.js';
import './App.scss';
import './i18n';
function App() {
	return (
		<ThemeProvider>
			<div className={`App-container`}>
				<Navbar />
				<HomePage id='home' />
				<Skills id='skills' />
				<AboutPage id='about' />
				<ProjectsPage id='projects' />
			</div>
		</ThemeProvider>
	);
}

export default App;
