import { WEATHER_DATA_TIME_STAMP_CACHE_LABEL, CACHE_DURATION } from "../constants/utilConstant";

export const getCachedWeatherData = (cityCode) => {
  const cachedData = localStorage.getItem(`city${cityCode}`);
  const cachedTimestamp = localStorage.getItem(WEATHER_DATA_TIME_STAMP_CACHE_LABEL);

  if (cachedData && cachedTimestamp) {
    const currentTime = new Date().getTime();
    const expirationTime = parseInt(cachedTimestamp, 10) + CACHE_DURATION;

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
