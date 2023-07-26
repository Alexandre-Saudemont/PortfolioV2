import React from 'react';
import './App.scss';
import ThemeProvider from './Components/DarkMode/ThemeProvider/ThemeProvider';
import {DarkModeContext} from './Components/DarkMode/DarkModeContext/DarkModeContext';
import {Outlet} from 'react-router-dom';

function App() {
	const isDarkMode = React.useContext(DarkModeContext);
	const darkMode = isDarkMode ? 'lightMode' : 'darkMode';

	return (
		<ThemeProvider>
			<div className={`App-container ${darkMode}`}>
				<Outlet />
			</div>
		</ThemeProvider>
	);
}

export default App;
