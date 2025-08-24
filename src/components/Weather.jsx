import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import weatherImage from "../assets/weather-banner.png";
import WeatherCard from "./WeatherCard";
import { fetchWeatherData } from "../redux/features/weather/weatherSlice";

const Weather = () => {
  const { error, loading, weatherData } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  console.log(city)
  const handleFetchWeather = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherData(city));
    setCity("");
  };

  return (
    <div className="bg-blue-300">
      <div className=" min-h-screen container min-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold text-center pt-20 pb-10">
          Weather Dashboard
        </h1>
        <div className="flex flex-col justify-between items-center">
          <p className="bg-red-300 text-white text-center px-4 py-6 rounded-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <img src={weatherImage} alt="weather-banner-image" />
        </div>

        {/* search weather form */}
        <form
        onSubmit={handleFetchWeather}
        className="my-6 flex flex-wrap gap-2 md:gap-4">
          <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="enter city name"
            className="flex-grow p-2 border rounded "
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md text-white font-semibold cursor-pointer"
          >
            Search Weather
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded-md text-white font-semibold cursor-pointer"
          >
            Clear
          </button>
        </form>

        <div>
          {/* loading */}
          {loading && (
            <p className="text-center py-4 text-5xl font-bold text-white">
              Loading...
            </p>
          )}
          {error && (
            <p className="text-center text-red-500 py-4 text-xl font-semibold ">
              {error}
            </p>
          )}
        </div>

        <div>
            {
                weatherData.map((data, index)=>(
                    <WeatherCard key={index} data={data}/>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Weather;
