export default function Footer() {
    return (
        <div className="mb-5 flex">
            <div className="flex mx-5 gap-3">
                <div className="mt-2">
                    <img src="/images/humidity.png" className="w-8 h-8" />
                </div>
                <div className="flex flex-col  text-white">
                    <p className="text-lg">67 %</p>
                    <span>Humidiyt</span>
                </div>
            </div>
            <div className="flex mx-5 gap-3">
                <div className="mt-2">
                    <img src="/images/wind.png" className="w-8 h-8" />
                </div>
                <div className="flex flex-col  text-white">
                    <p className="text-lg">2.06 Km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
    )
}