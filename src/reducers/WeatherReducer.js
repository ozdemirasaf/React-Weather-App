import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cityValue: "",
    searchIsSituation: false,
    weather: [],
    trueIsFalse: false,
    weatherLocations: { lat: null, lon: null }
}

const WeatherReducer = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        _setValueCity: (state, action) => {
            state.cityValue = action.payload;
        },
        _searchSituation: (state, action) => {
            state.searchIsSituation = action.payload;
        },
        _weatherSituation: (state, action) => {
            state.weather = action.payload;
        },
        _weatherInfo: (state, action) => {
            state.trueIsFalse = action.payload;
        },
        _weatherLocations: (state, action) => {
            state.weatherLocations = action.payload;
        }
    }
})


export const { _setValueCity, _searchSituation, _weatherSituation, _weatherInfo, _weatherLocations } = WeatherReducer.actions;
export default WeatherReducer.reducer