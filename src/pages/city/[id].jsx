
import WeatherCards from "../../Components/WeatherCards";
import { getWeather } from "../../api/api";
import { useRouter } from "next/router";
import Image from "next/image";
import SingleWeatherCard from "../../Components/SingleWeatherCard";

export default function index({ weatherData }) {
  const router = useRouter();
  const { index } = router.query;
  return (
    <div>
      <div className="flex items-center justify-center pt-12 gap-6 flex-wrap">
        <Image
          src="/Icon/01.png"
          width={50}
          height={50}
          alt="logo"
          style={{ width: "auto", height: "auto" }}
        />
        <h1 className="ml-2 text-4xl font-bold text-center">Weather App</h1>
      </div>
      <div className="max-w-4xl mt-14 bg-black mx-auto">
        <SingleWeatherCard city={weatherData} index = {index}/>
      </div>
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
