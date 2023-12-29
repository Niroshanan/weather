import { useRouter } from "next/router";
import Image from "next/image";
import SingleWeatherCard from "../../Components/SingleWeatherCard";
import { useState, useEffect } from "react";
import { appToast } from "../../utils/appToast";
import { loadSingleWeatherData } from "../../utils/weatherUtils";
import {
  WEATHER_APP_NAME,
  WEATHER_ICON_ALT_NAME,
  WEATHER_ICON_PATH,
} from "../../constants/pageConstants";
import { getWeather } from "../../pages/api/api";

export default function Index() {
  const router = useRouter();
  const { index, id } = router.query;
  const [selectedCity, setSelectedCity] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      try {
        setSelectedCity(await getWeather(id));
      } catch (error) {
        appToast(error.message, "error");
      }
    };

    if (router.isReady) {
      loadData();
    }
  }, [router.isReady]);

  return (
    <div className="single-city">
      <div className="single-city-logo ">
        <Image
          src={WEATHER_ICON_PATH}
          width={50}
          height={50}
          alt={WEATHER_ICON_ALT_NAME}
        />
        <h1 className="single-city-appName ">{WEATHER_APP_NAME}</h1>
      </div>
      <div className="single-city-card ">
        {router.isReady && selectedCity && (
          <SingleWeatherCard city={selectedCity} index={index} />
        )}
      </div>
    </div>
  );
}
