import { WEATHER_DATA_TIME_STAMP_CACHE_LABEL } from "../constants/utilConstant";

export const getCachedWeatherData = (cityCode) => {
  const cachedData = localStorage.getItem(`city${cityCode}`);
  const cachedTimestamp = localStorage.getItem(WEATHER_DATA_TIME_STAMP_CACHE_LABEL);

  if (cachedData && cachedTimestamp) {
    const currentTime = new Date().getTime();
    const expirationTime = parseInt(cachedTimestamp, 10) + 5 * 60 * 1000;

    if (currentTime < expirationTime) {
      return JSON.parse(cachedData);
    }
  }
  return null;
};

export const cacheWeatherData = (weatherData) => {
  localStorage.setItem(`city${weatherData.id}`, JSON.stringify(weatherData));
  localStorage.setItem(WEATHER_DATA_TIME_STAMP_CACHE_LABEL, new Date().getTime().toString());
};
