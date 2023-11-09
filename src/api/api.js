const { default: axios } = require("axios");

const apiURL = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const getWeather = async (cityId) => {
  const { data } = await axios.get(
    `${apiURL}id=${cityId}&units=metric&appid=${apiKey}`
  );
  return data;
};
