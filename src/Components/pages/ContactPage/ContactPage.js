import React, {useState, useEffect, useContext, forwardRef} from 'react';
import {getWeatherData} from '../../request';
import {DarkModeContext} from '../../DarkMode/DarkModeContext/DarkModeContext';
// import {useNavigate} from 'react-router-dom';
// import house from '../../../assets/img/house.svg';
// import houseDark from '../../../assets/img/house-dark.svg';
import {useTranslation} from 'react-i18next';
import './ContactPage.scss';

const ContactPage = forwardRef((props, ref) => {
	const [weatherData, setWeatherData] = useState(null);
	const [error, setError] = useState(null);
	const {isDarkMode} = useContext(DarkModeContext);
	// const navigate = useNavigate();
	const {t} = useTranslation();

	// function navigateHome() {
	// 	navigate('/');
	// }

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getWeatherData(49.258329, 4.031696);
				setWeatherData(response.data);
			} catch (error) {
				setError(error);
			}
		};
		fetchData();
	}, []);

	return (
		<div className={`contactPage ${isDarkMode ? 'lightMode' : 'darkMode'}`}>
			<section ref={ref} className='contactPage'>
				{/* <img src={!isDarkMode ? house : houseDark} alt='icon house' className='contactPage-iconHome' onClick={navigateHome} /> */}
				<p> {error && error.message}</p>
				<h1 className='contactPage-title'>{t(`contactPage.title`)}</h1>
				<p className='contactPage-text'>{t(`contactPage.text`)}</p>
				<a
					className='contactPage-cv'
					href='https://drive.google.com/file/d/1is708_lJybA_BtGTnXvvGdSbYiyexQxw/view?usp=sharing'
					rel='noreferrer'
					target='_blank'>
					{t(`contactPage.CV`)}
				</a>
				<div className='contactPage-weather'>
					{/* We make sure that weatherData is not null and after that we search the name of the city related to the lat & lon we setup above*/}
					<p className='contactPage-weather-city'>{weatherData && weatherData.name}</p>
					<p className='contactPage-weather-description'>{weatherData && weatherData.weather[0].description}</p>
					<p className='contactPage-weather-temp'>{weatherData && weatherData.main.temp}°C</p>
					<img
						src={weatherData && `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
						alt='icon for current city'
						className={!isDarkMode ? 'contactPage-weather-icon' : 'contactPage-weather-icon-dark'}
					/>
				</div>
			</section>
		</div>
	);
});

export default ContactPage;
