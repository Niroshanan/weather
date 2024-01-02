import React, { useEffect, useState } from "react";
import HomeSection from "../Components/HomeSection";
import WeatherSection from "../Components/WeatherSection";
import { loadWeatherData } from "../utils/weatherUtils";
import { appToast } from "../utils/appToast";
import Footer from "../Components/Footer";
import { useUser } from "@auth0/nextjs-auth0/client";
import Login from "../Components/login";
import UserDetails from "../Components/UserDetails";

export default function Home() {
  const [weatherData, setWeatherData] = useState([]);
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    async function loadData() {
      try {
        const data = await loadWeatherData();
        setWeatherData(data);
      } catch (error) {
        appToast(error.message, "error");
      }
    }

    loadData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <main className="main">
      <div>
        {!user && <Login/>}
        {user && (
          <div>
            <UserDetails user={user} />
            <HomeSection />
          </div>
        )}
        {user && weatherData && <WeatherSection weather={weatherData} />}
        <Footer />
      </div>
    </main>
  );
}
