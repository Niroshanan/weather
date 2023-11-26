import Image from "next/image";
import React from "react";
import { formatDate, formatSunTime } from "../utils/loadDateTime";
import { getCardBgColour } from "../utils/getCardBgColour";

const WeatherCards = ({ city, index }) => {
  return (
    <div className={`weather-card  bg-${index % 5}`}>
      <div className="weather-top ">
        <div className="location-info ">
          <div>
            <div className="city-details">
              {city.name}, {city.sys.country}
            </div>
            <div>{formatDate(city.dt)}</div>
            <div className="cloud-details ">
              <div>
                <Image
                  src={`/Icon/${city.weather[0].description}.png`}
                  width={25}
                  height={25}
                  alt={`${city.weather[0].description}.png`}
                />
              </div>
              <div>
                <div>{city.weather[0].description}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="temp-info">
          <div>
            <div className="main-temp">
              {Math.round(city.main.temp)} &#8451;
            </div>
            <div>Temp Min: {Math.round(city.main.temp_min)}&#8451;</div>
            <div>Temp Max: {Math.round(city.main.temp_max)}&#8451;</div>
          </div>
        </div>
      </div>

      <div className="weather-bottom">
        <div>
          <div>Pressure: {city.main.pressure}hPa </div>
          <div>Humidity: {city.main.humidity}% </div>
          <div>Visibility: {(city.visibility / 1000).toFixed(1)}Km </div>
          <div className="long-seperator"></div>
        </div>
        <div>
          <div>
            <Image
              src="/Icon/deg.png"
              width={22}
              height={22}
              alt="degree Image"
            />
            <div className="long-seperator"></div>
          </div>
          <div>
            {city.wind.speed}m/s {city.wind.deg} Degree
          </div>
        </div>
        <div>
          <div>Sunrise: {formatSunTime(city.sys.sunrise)}</div>
          <div>Sunset: {formatSunTime(city.sys.sunset)}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCards;
