import WeatherCards from "../../Components/WeatherCards";
import { getWeather } from "../../api/api";
import { useRouter } from "next/router";
import Image from "next/image";
import SingleWeatherCard from "../../Components/SingleWeatherCard";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { data } from "autoprefixer";
import { appToast } from "../../utils/appToast";

export default function index() {
  const router = useRouter();
  const { index, id } = router.query;
  const {
    data: weatherData,
    error,
    isError,
    isLoading,
    refetch: fetchData,
  } = useQuery({
    queryKey: ["singleCityWeather", { id }],
    queryFn: () => getWeather(id),
    enabled: false,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (router.isReady) {
      fetchData();
    }
  }, [router.isReady]);

  useEffect(() => {
    if (isError) {
      appToast(error.message, "error");
    }
  }, [isError]);

  return (
    <div className="single-city">
      <div className="single-city-logo ">
        <Image
          src="/Icon/01.png"
          width={50}
          height={50}
          alt="logo"
          style={{ width: "auto", height: "auto" }}
        />
        <h1 className="single-city-appName ">Weather App</h1>
      </div>
      <div className="single-city-card ">
        {!isLoading && weatherData && (
          <SingleWeatherCard city={weatherData} index={index} />
        )}
      </div>
    </div>
  );
}
