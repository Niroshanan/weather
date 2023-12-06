"use client";
import React from "react";
import Image from "next/image";
import {
  ADD_CITY_BUTTON,
  WEATHER_APP_NAME,
  WEATHER_ICON_ALT_NAME,
  WEATHER_ICON_PATH,
} from "../constants/pageConstants";

const HomeSection = () => {
  return (
    <section className="homeSection">
      <div className="logo">
        <Image
          src={WEATHER_ICON_PATH}
          width={50}
          height={50}
          alt={WEATHER_ICON_ALT_NAME}
        />
        <h1 className="appName">{WEATHER_APP_NAME}</h1>
      </div>

      <div className="searchBox">
        <input type="text" className="city-input" placeholder="Enter a City" />
        <button className="add-button">{ADD_CITY_BUTTON}</button>
      </div>
    </section>
  );
};

export default HomeSection;
