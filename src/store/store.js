import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "../reducers/WeatherReducer";

const store = configureStore({
    reducer: {
        weather: WeatherReducer
    }
})

export default store;