import React, { useEffect } from "react";
import HomeSection from "../Components/HomeSection";
import WeatherSection from "../Components/WeatherSection";
import axios from "axios";
import { loadCitiesData } from "../utils/loadCities";
import { getWeather } from "../api/api";

export default function Home({weatherData}) {
  return (
    <main className="py-12 m-auto w-4/5 ">
      <HomeSection />
      <WeatherSection weather={weatherData}/>
    </main>
  );
}

export const getServerSideProps = async () => {
  const cities = await loadCitiesData();

  const weatherRes = cities.map(async (city) => {
    return await getWeather(city.CityCode);
  });
  const weatherData = await Promise.all(weatherRes);
  return {
    props: {weatherData: weatherData},
  };
};
