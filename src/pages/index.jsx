import React, { useEffect, useState } from "react";
import HomeSection from "../Components/HomeSection";
import WeatherSection from "../Components/WeatherSection";
import axios from "axios";
import { loadCitiesData } from "../utils/loadCities";
import { appToast } from "../utils/appToast";
import { getWeather } from "../api/api";
import { useQuery } from "react-query";

export default function Home() {
  const {
    data: weatherData,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["cityWeather"],
    queryFn: loadWeatherData,
    staleTime: 5 * 60 * 1000,
  });

  async function loadWeatherData() {
    try {
      const cities = await loadCitiesData();

      const weatherRes = await Promise.all(
        cities.map(async (city) => {
          return await getWeather(city.CityCode);
        })
      );
      return weatherRes;
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    if (isError) {
      appToast(error.message, "error");
    }
  }, [isError]);

  return (
    <main className="main">
      <div>
        <HomeSection />
        {!error && !isLoading && (<WeatherSection weather={weatherData} />)}
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
