import { useWeather } from "../../reducers/hooks"

export default function WeatherInfo() {

    const weathers = useWeather();

    if (!weathers || !weathers.data || !weathers.data.weather || !weathers.data.weather[0]) {
        return null;
    }

    let weatherInfo = '';

    switch (weathers.data.weather[0].main) {
        case 'Clouds':
            weatherInfo = 'clouds.png';
            break;
        case 'Clear':
            weatherInfo = 'clear.png';
            break;
        case 'Rain':
            weatherInfo = 'rain.png';
            break;
        case 'Mist':
            weatherInfo = 'mist.png';
            break;
        case 'Drizzle':
            weatherInfo = 'drizzle.png';
            break;
        case 'Snow':
            weatherInfo = 'snow.png';
            break;
        default:
            weatherInfo = 'default.png';
    }

    return (
        <div className="flex items-center justify-center mt-10">
            <img src={`/images/${weatherInfo}`} className="w-32" alt="Weather Condition" />
        </div>
    )
}
