const { default: axios } = require("axios");

const apiURL = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "ed54cb6093d3ab6c681a1c57c7088e44";

export const getWeather = async (cityId) => {
  const { data } = await axios.get(
    `${apiURL}id=${cityId}&units=metric&appid=${apiKey}`
  );
  return data;
};
