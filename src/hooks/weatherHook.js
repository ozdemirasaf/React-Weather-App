import { TOKEN } from "./token"
import { useCity, useWeatherSituation, useWeatherLocation } from "../reducers/hooks"
import { setWeather } from "../reducers/actions"
import { useEffect } from "react"

export default function WeatherFetch() {
    const cityName = useCity()
    const weatherSituation = useWeatherSituation()

    const weatherLocation = useWeatherLocation()


    const urls = {
        search: `https://api.openweathermap.org/data/2.5/weather?q=${cityName.title}&appid=${TOKEN}`,
        location: weatherLocation.data && weatherLocation.data.lat && weatherLocation.data.lon
            ? `https://api.openweathermap.org/data/2.5/weather?lat=${weatherLocation.data.lat}&lon=${weatherLocation.data.lon}&appid=${TOKEN}`
            : null,
    }

    const weatherFetch = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setWeather("weather", data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (cityName.title && weatherSituation.situation) {
            weatherFetch(urls.search)
        }
    }, [cityName, weatherSituation]);

    useEffect(() => {
        if (urls.location) {
            weatherFetch(urls.location)
        }
    }, [urls.location])

    return null
}
