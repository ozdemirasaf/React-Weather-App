import { useWeather } from "../../reducers/hooks";

export default function Footer() {
    const weather = useWeather();

    if (!weather || !weather.data || !weather.data.main || !weather.data.wind) {
        return null;
    }

    return (
        <div className="mb-5 flex">
            <div className="flex mx-5 gap-3">
                <div className="mt-2">
                    <img src="/images/humidity.png" className="w-8 h-8" alt="Humidity" />
                </div>
                <div className="flex flex-col text-white">
                    <p className="text-lg">{weather.data.main.humidity} %</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="flex mx-5 gap-3">
                <div className="mt-2">
                    <img src="/images/wind.png" className="w-8 h-8" alt="Wind Speed" />
                </div>
                <div className="flex flex-col text-white">
                    <p className="text-lg">{weather.data.wind.speed} Km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
    );
}
