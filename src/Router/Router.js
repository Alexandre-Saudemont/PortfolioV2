import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import HomePage from '../Components/pages/HomePage/HomePage.js';
import AboutPage from '../Components/pages/AboutPage/AboutPage.js';
import ProjectsPage from '../Components/pages/ProjectsPage/ProjectsPage.js';
import CVPage from '../Components/pages/CVPage/CVPage.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'About',
				element: <AboutPage />,
			},
			{
				path: 'Projects',
				element: <ProjectsPage />,
			},
			{
				path: 'CV',
				element: <CVPage />,
			},
		],
	},
]);

export default router;
