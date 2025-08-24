import { FaCloudRain } from "react-icons/fa";
import { IoIosPartlySunny } from "react-icons/io";
import { IoCloudyNightSharp } from "react-icons/io5";


const WeatherCard = ({speed,name,main,temp}) => {

 const getwetherIcon =(main)=>{
 if(main === "Clouds") return <FaCloudRain className="text-6xl" />;
    if(main === "Clear") return <IoIosPartlySunny className="text-6xl text-yellow-400" />;
    if(main === "Rain") return <IoCloudyNightSharp className="text-6xl text-gray-300" />;
 }
   

  return (
    <div className="flex items-center gap-10 bg-blue-400 text-white p-6 rounded-xl justify-center">
        <div className="border-r-4">
            <p className="pr-8">{getwetherIcon(main)}</p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
            <p className="font-bold text-3xl">{name}</p>
            {/* <p>{main}</p> */}
            <p className="text-xl font-semibold">{temp} °C</p>
            <p className="text-lg font-medium">{speed} m/s</p>
        </div>
    </div>
  )
}

export default WeatherCard