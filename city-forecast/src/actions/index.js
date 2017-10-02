import axios from 'axios';

const API_KEY = '6a710e28147d8b68fda30fe7891aac08';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const ActionType = {
    FETCH_WEATHER: 'FETCH_WEATHER'
};

export function fetchWeather(city) {
    const url = `${BASE_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: ActionType.FETCH_WEATHER,
        payload: request
    };
}