import citiesData from "../api/cities.json";

export const loadCitiesData = async () => {
  return citiesData.cities;
};
