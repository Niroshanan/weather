export const getCachedWeatherData = () => {
  const cachedData = localStorage.getItem("weatherData");
  const cachedTimestamp = localStorage.getItem("weatherDataTimestamp");

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
  localStorage.setItem("weatherData", JSON.stringify(weatherData));
  localStorage.setItem("weatherDataTimestamp", new Date().getTime().toString());
};

