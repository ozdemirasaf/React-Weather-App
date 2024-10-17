import { TOKEN } from "./token"
import { useCity, useWeatherSituation } from "../reducers/hooks"
import { setWeather } from "../reducers/actions"
import { useEffect } from "react"

export default function WeatherFetch() {
    const cityName = useCity()
    const weatherSituation = useWeatherSituation()


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.title}&appid=${TOKEN}`



    const weatherFetch = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setWeather('data', data);
        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        if (cityName.title && weatherSituation.situation) {
            weatherFetch()
        }
    }, [cityName, weatherSituation]);

    return null
}