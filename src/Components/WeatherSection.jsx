"use client";
import React from "react";
import WeatherCards from "./WeatherCards";
import Link from "next/link";

const WeatherSection = ({ weather }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 ">
      {weather.map((city, i) => (
        <Link href={`/city/${city.id}`} key={i}>
          <WeatherCards city={city} />
        </Link>
      ))}
    </div>
  );
};

export default WeatherSection;
