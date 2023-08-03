import React, {useState, useEffect} from 'react';
import {DarkModeContext} from '../DarkModeContext/DarkModeContext';
import './ThemeProvider.scss';

function ThemeProvider({children}) {
	const [isDarkMode, setDarkMode] = useState(() => {
		const saveMode = window.localStorage.getItem('isDarkMode');
		return saveMode !== null ? JSON.parse(saveMode) : false;
	});

	const value = {isDarkMode, setDarkMode};
	const modeClass = isDarkMode ? 'lightMode' : 'darkMode';

	useEffect(() => {
		window.localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
	}, [isDarkMode]);

	return (
		<DarkModeContext.Provider value={value}>
			<div className={modeClass}>{children}</div>
		</DarkModeContext.Provider>
	);
}

export default ThemeProvider;
