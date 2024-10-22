import { useSelector } from 'react-redux'

export const useCity = () => useSelector(state => state.weather.cityValue)

export const useWeatherSituation = () => useSelector(state => state.weather.searchIsSituation)

export const useWeather = () => useSelector(state => state.weather.weather)

export const useWeatherInfo = () => useSelector(state => state.weather.trueIsFalse)

export const useWeatherLocation = () => useSelector(state => state.weather.weatherLocations)