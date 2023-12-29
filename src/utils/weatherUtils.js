import Link from "next/link";
import { getWeather } from "../pages/api/api";
import { cacheWeatherData, getCachedWeatherData } from "./cacheUtils";
import { loadCitiesData } from "./loadCities";
import WeatherCards from "../Components/WeatherCards";

export const loadWeatherData = async () => {
  try {
    const cities = await loadCitiesData();
    cities.sort((a,b) =>(a.Temp - b.Temp));
    const weatherRes = await Promise.all(
      cities.map(async (city, i) => {
        console.log("City Temp",`${city.Temp} ${city.CityName}`)
        const cityWeatherData = await loadSingleWeatherData(city.CityCode);
        return (
          <Link
            href={{
              pathname: `/city/${cityWeatherData.id}`,
              query: { index: i },
            }}
            key={i}
          >
            <WeatherCards city={cityWeatherData} index={i} />
          </Link>
        );
      })
    );

    return weatherRes;
  } catch (error) {
    throw error;
  }
};

export const loadSingleWeatherData = async (cityCode) => {
  const cachedData = getCachedWeatherData(cityCode);
  if (cachedData) {
    return cachedData;
  }
  try {
    const singleWeatherData = await getWeather(cityCode);
    cacheWeatherData(singleWeatherData);
    return singleWeatherData;
  } catch (error) {
    throw error;
  }
};
