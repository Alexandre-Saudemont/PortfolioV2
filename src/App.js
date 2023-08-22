import React, {useState, useEffect} from 'react';
import './App.scss';
import ThemeProvider from './Components/DarkMode/ThemeProvider/ThemeProvider';
import {Outlet} from 'react-router-dom';
import News from './Components/News/News';

function App() {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		// Vérifiez si le modal a déjà été montré
		const hasShownNewsModal = localStorage.getItem('hasShownNewsModal');

		// Si ce n'est pas le cas, affichez-le
		if (!hasShownNewsModal) {
			setShowModal(true);
			// Marquez le modal comme affiché
			localStorage.setItem('hasShownNewsModal', 'true');
		}
	}, []);
	return (
		<ThemeProvider>
			{showModal && <News onCloseModal={() => setShowModal(false)} />}
			<div className={`App-container`}>
				<Outlet />
			</div>
		</ThemeProvider>
	);
}

export default App;
