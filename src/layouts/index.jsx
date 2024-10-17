import Footer from "../components/footer";
import Search from "../components/search";
import WeatherInfo from "../components/weatherInfo";
import WeatherTitle from "../components/weatherTitles";
import { useCity, useWeatherSituation } from "../reducers/hooks";

import WeatherFetch from "../hooks/weatherHook";
import NotSearch from "../components/notSearch";

export default function MainLayout() {

    const city = useCity();
    const situation = useWeatherSituation()

    return (
        <div className="bg-[#4c27d6] h-[470px] flex flex-col w-80 rounded-lg ">
            <WeatherFetch />
            <header className="">
                <Search />
            </header>
            {
                city && situation ? (
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
