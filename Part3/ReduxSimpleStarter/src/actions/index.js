import axios from 'axios';

const API_KEY = '3f88a0eee8015965018188c1080262ca';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);  // this returns a promise (axios is a ajax library for react)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
