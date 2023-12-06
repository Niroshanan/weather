export const getCachedWeatherData = (cityCode) => {
  const cachedData = localStorage.getItem(`city${cityCode}`);
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
  localStorage.setItem(`city${weatherData.id}`, JSON.stringify(weatherData));
  localStorage.setItem("weatherDataTimestamp", new Date().getTime().toString());
};
