import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../Components/pages/HomePage/HomePage';
import AboutPage from '../Components/pages/AboutPage/AboutPage';
import ProjectsPage from '../Components/pages/ProjectsPage/ProjectsPage';
// Create a router that has all your routes
const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'About Me',
        element: <AboutPage />,
      },
      {
        path: 'Projects',
        element: <ProjectsPage />,
      }
    ],
  },
])

export default Router;