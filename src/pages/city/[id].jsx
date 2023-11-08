import WeatherCards from "../../Components/WeatherCards";
import { getWeather } from "../../api/api";
import { useRouter } from "next/router";

export default function index({ weatherData }) {
  const router = useRouter();
  return (
    <div className="max-w-5xl mx-auto">
      <WeatherCards city={weatherData} />
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const weatherData = await getWeather(params.id);
  return {
    props: {
      weatherData,
    },
  };
};
