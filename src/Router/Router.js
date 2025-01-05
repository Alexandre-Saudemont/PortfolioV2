import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import HomePage from '../Components/pages/HomePage/HomePage.js';
import AboutPage from '../Components/pages/AboutPage/AboutPage.js';
import ProjectsPage from '../Components/pages/ProjectsPage/ProjectsPage.js';

import ContactPage from '../Components/pages/ContactPage/ContactPage';

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
				path: 'Contact',
				element: <ContactPage />,
			},
		],
	},
]);

export default router;
