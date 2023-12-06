const { default: axios } = require("axios");

import { API_URL, API_KEY, UNITS } from "../constants/apiConfig";

export const getWeather = async (cityId) => {
  try {
    const { data } = await axios.get(
      `${API_URL}id=${cityId}&units=${UNITS}&appid=${API_KEY}`
    );
    return data;
  } catch (err) {
    console.log("error from api", err);
    throw err;
  }
};
