import { useWeather } from "../../reducers/hooks";

export default function WeatherTitle() {
    const weather = useWeather();


    if (!weather || !weather.data || !weather.data.main) {
        return null;
    }

    const weatherTemp = weather.data.main.temp - 273.15;
    const weatherName = weather.data.name;

    const weatherTitle = weatherName ? weatherName.split(" ") : [];
    const filteredTitle = weatherTitle.filter(word => word !== 'Province');

    return (
        <div className="flex flex-col text-white items-center justify-center mt-4">
            <h2 className="text-6xl mb-2 font-semibold">{Math.round(weatherTemp)}°C</h2>
            <h3 className="text-5xl">{filteredTitle.join(" ")}</h3>
        </div>
    );
}
