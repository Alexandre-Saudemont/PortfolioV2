import React from 'react';
import './App.css';
import HomePage from './Components/pages/HomePage/HomePage';
import Header from './Components/Header/Header';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='App-container'>
				<HomePage />
			</div>
		</div>
	);
}

export default App;
