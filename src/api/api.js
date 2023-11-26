import { appToast } from "../utils/appToast";

const { default: axios } = require("axios");

const apiURL = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const getWeather = async (cityId) => {
  try {
    const { data } = await axios.get(
      `${apiURL}id=${cityId}&units=metric&appid=${apiKey}`
    );
    return data;
  } catch (err) {
    console.log("error from api", err);
    throw err;
  }
};
