import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5/',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const getWeatherData = (lat, lon) => {
	return axiosInstance.get('weather', {
		params: {
			lat: lat,
			lon: lon,
			appid: process.env.REACT_APP_APIKEY_WEATHER,
			units: 'metric',
			lang: 'fr',
		},
	});
};
