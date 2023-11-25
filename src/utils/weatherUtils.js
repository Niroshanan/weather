
import { getWeather } from "../api/api";
import { cacheSingleWeatherData, cacheWeatherData, getCachedWeatherData } from "./cacheUtils";
import { loadCitiesData } from "./loadCities";

export const loadWeatherData = async () => {
  try {
    const cachedData = getCachedWeatherData();

    if (cachedData) {
      return cachedData;
    }

    const cities = await loadCitiesData();
    const weatherRes = await Promise.all(
      cities.map(async (city) => {
        return await getWeather(city.CityCode);
      })
    );

    cacheWeatherData(weatherRes);
    return weatherRes;
  } catch (error) {
    throw error;
  }
};

