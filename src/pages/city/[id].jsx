import { useRouter } from "next/router";
import Image from "next/image";
import SingleWeatherCard from "../../Components/SingleWeatherCard";
import { useState, useEffect } from "react";
import { appToast } from "../../utils/appToast";
import { loadWeatherData } from "../../utils/weatherUtils";

export default function index() {
  const router = useRouter();
  const { index ,id} = router.query;
  const [weatherData, setWeatherData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      try {
        setWeatherData(await loadWeatherData());
      } catch (error) {
        appToast("Failed to fetch weather data", "error");
      }
    };

    if (router.isReady) {
      loadData();
    }
  }, [router.isReady]);

  useEffect(() => {
    if (weatherData.length > 0) {
      const city = weatherData.find((item) => item.id == id);
      setSelectedCity(city);
    }
  }, [weatherData]);

  console.log("single" , selectedCity);
  return (
    <div className="single-city">
      <div className="single-city-logo ">
        <Image
          src="/Icon/01.png"
          width={50}
          height={50}
          alt="logo"
        />
        <h1 className="single-city-appName ">Weather App</h1>
      </div>
      <div className="single-city-card ">
        {router.isReady && selectedCity && (
          <SingleWeatherCard city={selectedCity} index={index} />
        )}
      </div>
    </div>
  );
}
