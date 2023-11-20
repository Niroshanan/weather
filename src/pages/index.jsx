import React, { useEffect, useState } from "react";
import HomeSection from "../Components/HomeSection";
import WeatherSection from "../Components/WeatherSection";
import axios from "axios";
import { loadCitiesData } from "../utils/loadCities";
import { appToast } from "../utils/appToast";
import { getWeather } from "../api/api";
import { useQuery } from "react-query";

export default function Home() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    loadWeatherData();
  }, []);

  async function loadWeatherData() {
    try {
      const cachedData = localStorage.getItem("weatherData");
      const cachedTimestamp = localStorage.getItem("weatherDataTimestamp");

      if (cachedData && cachedTimestamp) {
        const currentTime = new Date().getTime();
        const expirationTime = parseInt(cachedTimestamp, 10) + 5 * 60 * 1000;

        if (currentTime < expirationTime) {
          setWeatherData(JSON.parse(cachedData));
          return;
        }
      }

      const cities = await loadCitiesData();
      const weatherRes = await Promise.all(
        cities.map(async (city) => {
          return await getWeather(city.CityCode);
        })
      );

      setWeatherData(weatherRes);

      localStorage.setItem("weatherData", JSON.stringify(weatherRes));
      localStorage.setItem("weatherDataTimestamp", new Date().getTime().toString());
    } catch (err) {
      throw(err)
    }
  }

  return (
    <main className="main">
      <div>
        <HomeSection />
        {weatherData && (<WeatherSection weather={weatherData} />)}
      </div>
    </main>
  );
}

//Prevoius implement to fetch data on server

// export const getServerSideProps = async () => {
//   const cities = await loadCitiesData();

//   const weatherRes = cities.map(async (city) => {
//     return await getWeather(city.CityCode);
//   });
//   const weatherData = await Promise.all(weatherRes);
//   return {
//     props: { weatherData: weatherData },
//   };
// };
