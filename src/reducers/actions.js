import store from "../store/store"
import { _setValueCity, _searchSituation, _weatherSituation, _weatherInfo } from './WeatherReducer';

export const setCity = (name, title) => store.dispatch(_setValueCity({ name, title }))

export const setSearchSituation = (name, situation) => store.dispatch(_searchSituation({ name, situation }))

export const setWeather = (name, data) => store.dispatch(_weatherSituation({ name, data }))

export const setWeatherInfo = (name, data) => store.dispatch(_weatherInfo({ name, data }))