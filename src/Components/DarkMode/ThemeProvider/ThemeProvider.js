import React, {useState, useEffect} from 'react';
import {DarkModeContext} from '../DarkModeContext/DarkModeContext';
import './ThemeProvider.scss';

function ThemeProvider({children}) {
	const [isDarkMode, setDarkMode] = useState(() => {
		const saveMode = window.localStorage.getItem('isDarkMode');
		return saveMode !== null ? JSON.parse(saveMode) : false;
	});

	const value = {
		isDarkMode,
		setDarkMode,
		backgroundColor: isDarkMode ? '#323234' : '#ededed',
		particlesColor: isDarkMode ? '#e5e5e5' : '#323234',
	};
	const modeClass = isDarkMode ? 'darkMode' : 'lightMode';

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
