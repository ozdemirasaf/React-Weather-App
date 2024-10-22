import Footer from "../components/footer";
import Search from "../components/search";
import WeatherInfo from "../components/weatherInfo";
import WeatherTitle from "../components/weatherTitles";
import WeatherFetch from "../hooks/weatherHook";
import NotSearch from "../components/notSearch";

import { useCity, useWeatherSituation, useWeatherLocation } from "../reducers/hooks";
import { useEffect } from "react";
import { setWeatherLocations } from "../reducers/actions";

export default function MainLayout() {

    const locations = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setWeatherLocations({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    })
                }
            )
        }
    }

    useEffect(() => {
        locations()
    }, [])

    const city = useCity();
    const situation = useWeatherSituation()
    const location = useWeatherLocation()

    const hasData = (city && situation) || (location && location.lat !== null && location.lon !== null);

    return (
        <div className="bg-[#4c27d6] h-[470px] flex flex-col w-80 rounded-lg ">
            <WeatherFetch />
            <header>
                <Search />
            </header>
            {
                hasData ? (
                    <>
                        <main className="flex-grow">
                            <WeatherInfo />
                            <WeatherTitle />
                        </main>
                        <footer className="mt-auto">
                            <Footer />
                        </footer>
                    </>
                )
                    :
                    <div className="flex justify-center items-center mt-5">
                        <NotSearch />
                    </div>
            }

        </div>
    );
}
