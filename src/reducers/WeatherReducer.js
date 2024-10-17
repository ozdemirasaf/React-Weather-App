import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cityValue: "",
    searchIsSituation: false,
    weather: [],
    trueIsFalse: false
}

const WeatherReducer = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        _setValueCity: (state, action) => {
            state.cityValue = action.payload
        },
        _searchSituation: (state, action) => {
            state.searchIsSituation = action.payload
        },
        _weatherSituation: (state, action) => {
            state.weather = action.payload
        },
        _weatherInfo: (state, action) => {
            state.trueIsFalse = action.payload
        }
    }
})

export const { _setValueCity, _searchSituation, _weatherSituation, _weatherInfo } = WeatherReducer.actions;
export default WeatherReducer.reducer