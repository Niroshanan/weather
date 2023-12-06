import React, { useEffect, useState } from "react";
import HomeSection from "../Components/HomeSection";
import WeatherSection from "../Components/WeatherSection";
import { loadWeatherData } from "../utils/weatherUtils";
import { appToast } from "../utils/appToast";

export default function Home() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await loadWeatherData();
        setWeatherData(data);
      } catch (error) {
        appToast(error.message, "error");
      }
    }

    loadData();
  }, []);

  return (
    <main className="main">
      <div>
        <HomeSection />
        {weatherData && <WeatherSection weather={weatherData} />}
      </div>
    </main>
  );
}
