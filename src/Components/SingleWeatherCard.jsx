import Image from "next/image";
import React from "react";
import { formatDate, formatSunTime } from "../utils/loadDateTime";
import { getCardBgColour } from "../utils/getCardBgColour";

const SingleWeatherCard = ({ city, index }) => {
  return (
    <div className={`single-weather-card bg-${index % 5}`}>
      <div className="location-time">
        <div className="location">
          {city.name},{city.sys.country}
        </div>
        <div className="time">{formatDate(city.dt)}</div>
      </div>

      <div className="forecast-details ">
        <div>
          <div>
            <Image
              src={`/Icon/${city.weather[0].description}.png`}
              width={40}
              height={40}
              alt={`${city.weather[0].description}.png`}
            />
          </div>
          <div>{city.weather[0].description}</div>
          <div className="small-seperator"></div>
        </div>

        <div>
          <div className="temp-display">
            {Math.round(city.main.temp)}&#8451;
          </div>
          <div>Temp Min: {Math.round(city.main.temp_min)}&#8451;</div>
          <div>Temp Max: {Math.round(city.main.temp_max)}&#8451;</div>
        </div>
      </div>

      <div className="environment-info">
        <div>
          <div>Pressure: {city.main.pressure}hPa </div>
          <div>Humidity: {city.main.humidity}% </div>
          <div>Visibility: {(city.visibility / 1000).toFixed(1)}Km </div>
          <div className="long-seperator"></div>
        </div>
        <div>
          <div>
            <Image
              className="degree-icon"
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

export default SingleWeatherCard;
