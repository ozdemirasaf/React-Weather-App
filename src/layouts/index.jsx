import Footer from "../components/footer";
import Search from "../components/search";
import WeatherInfo from "../components/weatherInfo";
import WeatherTitle from "../components/weatherTitles";

export default function MainLayout() {
    return (
        <div className="bg-[#4c27d6] h-[470px] flex flex-col w-80 rounded-lg ">
            <header className="">
                <Search />
            </header>
            <main className="flex-grow">
                <WeatherInfo />
                <WeatherTitle />
            </main>
            <footer className="mt-auto">
                <Footer />
            </footer>
        </div>
    )
}