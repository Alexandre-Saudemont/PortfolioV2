import React, {useState, useEffect, useContext} from 'react';
import Swal from 'sweetalert2';
import {getWeatherData} from '../../request';
import {DarkModeContext} from '../../DarkMode/DarkModeContext/DarkModeContext';
import {useNavigate} from 'react-router-dom';
import {sendForm} from '@emailjs/browser';
import {GoogleMap, LoadScript} from '@react-google-maps/api';
import house from '../../../assets/img/house.svg';
import houseDark from '../../../assets/img/house-dark.svg';
import './ContactPage.scss';

function ContactPage() {
	const [weatherData, setWeatherData] = useState(null);
	const [error, setError] = useState(null);
	const [toggleModalSuccess, setToggleModalSucces] = useState(null);

	const {isDarkMode} = useContext(DarkModeContext);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		// Envoie l'e-mail via emailJS
		sendForm('contact_service', 'template_l2nwp6s', event.target, 'Z3rh0mNjILy5GvJ3-')
			.then(() => {
				setToggleModalSucces(true);
				Swal.fire({
					title: 'Message envoyé !',
					text: 'Je vous répondrai dès que possible.',
					icon: 'success',
					confirmButtonText: 'OK',
				});
			})
			.catch((error) => {
				alert('Une erreur est survenue:', error);
			});
	};

	const Reims = {
		lat: 49.258329,
		lng: 4.031696,
	};

	function navigateHome() {
		navigate('/');
	}

	function onClickToggleModalSuccess(e) {
		e.preventDefault();
		Swal.fire({
			title: 'Message envoyé !',
			text: 'Je vous répondrai dès que possible.',
			icon: 'success',
			confirmButtonText: 'OK',
		});
	}

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
		<div className='contactPage'>
			<img src={!isDarkMode ? house : houseDark} alt='icon house' className='contactPage-iconHome' onClick={navigateHome} />
			<p> {error && error.message}</p>
			<form onSubmit={handleSubmit} className='contactPage-form'>
				<input type='text' name='user_name' placeholder='Name' required className='contactPage-form-name' />
				<input type='email' name='user_email' placeholder='E-mail' required className='contactPage-form-email' />
				<textarea name='message' placeholder='Message' required className='contactPage-form-message'></textarea>
				<input type='submit' value='Send' className='contactPage-form-button' />
			</form>

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
			<LoadScript async googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
				<GoogleMap mapContainerClassName='contactPage-map' center={Reims} zoom={15}></GoogleMap>
			</LoadScript>
		</div>
	);
}

export default ContactPage;
