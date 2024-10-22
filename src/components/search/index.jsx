import { setCity, setSearchSituation, } from "../../reducers/actions"


export default function Search() {

    const cityValueTitle = (e) => {
        if (e.target.value) {
            setCity('weather', e.target.value)
        }
    }

    const weatherSituation = () => {
        setSearchSituation('weather', true)

        setTimeout(() => {
            setSearchSituation('weather', false)
        }, 500)
    }

    return (
        <div className="flex justify-center items-center">
            <label className="flex mt-5">
                <input
                    type="text"
                    className="w-52 rounded-2xl pl-2 outline-none bg-[#e9fdff]"
                    placeholder="Search"
                    onChange={e => cityValueTitle(e)}
                />
                <button onClick={weatherSituation}>
                    <div className="w-10 h-10 rounded-full bg-[#e9fdff] flex items-center justify-center ml-5 cursor-pointer ">
                        <img src="/images/search.png" className="w-4" alt="" />
                    </div>
                </button>
            </label>
        </div>
    )
}