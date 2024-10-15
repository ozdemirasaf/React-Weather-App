export default function Search() {
    return (
        <div className="flex justify-center items-center">
            <label className="flex mt-5 " htmlFor="">
                <input type="text" className="w-52 rounded-2xl pl-2 outline-none bg-[#e9fdff]" placeholder="Search" />
                <div className="w-10 h-10 rounded-full bg-[#e9fdff] flex items-center justify-center ml-5 cursor-pointer ">
                    <img src="/images/search.png" className="w-4" alt="" />
                </div>
            </label>
        </div>
    )
}