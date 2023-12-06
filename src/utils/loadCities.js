import citiesData from "../../public/cities.json";

export const loadCitiesData = async () => {
  return citiesData.List;
};