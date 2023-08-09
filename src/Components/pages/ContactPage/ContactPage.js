import React, {useState, useEffect, useContext} from 'react';
import {getWeatherData} from '../../request';
import {DarkModeContext} from '../../DarkMode/DarkModeContext/DarkModeContext';
import {useNavigate} from 'react-router-dom';
import house from '../../../assets/img/house.svg';
import houseDark from '../../../assets/img/house-dark.svg';
import './ContactPage.scss';

function ContactPage() {
	const [weatherData, setWeatherData] = useState(null);
	const [error, setError] = useState(null);

	const {isDarkMode} = useContext(DarkModeContext);
	const navigate = useNavigate();

	function navigateHome() {
		navigate('/');
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getWeatherData(49.258329, 4.031696);
				console.log('la reponse', response.data);
				setWeatherData(response.data);
			} catch (error) {
				setError(error);
			}
		};
		fetchData();
	}, []);

	console.log(weatherData);
	return (
		<div className='contactPage'>
			<img src={!isDarkMode ? house : houseDark} alt='icon house' className='contactPage-iconHome' onClick={navigateHome} />
			{/* We make sure that weatherData is not null and after that we search the name of the city related to the lat & lon we setup above*/}
			<p> {error && error.message}</p>
			<div className='contactPage-container-weather'>
				<p className='contactPage-weather-city'>{weatherData && weatherData.name}</p>
				<p className='contactPage-weather-description'>{weatherData && weatherData.weather[0].description}</p>
				<p className='contactPage-weather-temp'>{weatherData && weatherData.main.temp}°C</p>
				<img
					src={weatherData && `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
					alt='icon for current city'
					className={!isDarkMode ? 'contactPage-weather-icon' : 'contactPage-weather-icon-dark'}
				/>
			</div>
		</div>
	);
}

export default ContactPage;
