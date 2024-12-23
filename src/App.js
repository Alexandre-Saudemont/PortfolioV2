import React from 'react';
import './App.scss';
import ThemeProvider from './Components/DarkMode/ThemeProvider/ThemeProvider';
import {Outlet} from 'react-router-dom';
import './i18n';
function App() {
	return (
		<ThemeProvider>
			<div className={`App-container`}>
				<Outlet />
			</div>
		</ThemeProvider>
	);
}

export default App;
