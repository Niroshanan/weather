import Image from "next/image";
import React from "react";
import { formatDate, formatSunTime } from "../utils/loadDateTime";
import { getCardBgColour } from "../utils/getCardBgColour";
import {
  CELSIUS_UNIT,
  DEGREE_ICON_ALT_NAME,
  DEGREE_ICON_PATH,
  DEGREE_LABEL,
  HUMIDITY_LABEL,
  PERCENTAGE_UNIT,
  PRESSURE_LABEL,
  PRESSURE_UNIT,
  SUNRISE_LABEL,
  SUNSET_LABEL,
  TEMP_MAX_LABEL,
  TEMP_MIN_LABEL,
  VISIBILITY_LABEL,
  VISIBILITY_UNIT,
  WIND_SPEED_UNIT,
} from "../constants/pageConstants";

const WeatherCards = ({ city, index }) => {
  return (
    <div className={`weather-card  ${getCardBgColour(index)}`}>
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
            <div>
              {TEMP_MIN_LABEL} {Math.round(city.main.temp_min)}
              {CELSIUS_UNIT};
            </div>
            <div>
              {TEMP_MAX_LABEL} {Math.round(city.main.temp_max)}
              {CELSIUS_UNIT};
            </div>
          </div>
        </div>
      </div>

      <div className="weather-bottom">
        <div>
          <div>
            {PRESSURE_LABEL} {city.main.pressure} {PRESSURE_UNIT}
          </div>
          <div>
            {HUMIDITY_LABEL} {city.main.humidity} {PERCENTAGE_UNIT}
          </div>
          <div>
            {VISIBILITY_LABEL} {(city.visibility / 1000).toFixed(1)}
            {VISIBILITY_UNIT}
          </div>
          <div className="long-seperator"></div>
        </div>
        <div>
          <div>
            <Image
              src={DEGREE_ICON_PATH}
              width={22}
              height={22}
              alt={DEGREE_ICON_ALT_NAME}
            />
            <div className="long-seperator"></div>
          </div>
          <div>
            {city.wind.speed} {WIND_SPEED_UNIT} {city.wind.deg} {DEGREE_LABEL}
          </div>
        </div>
        <div>
          <div>
            {SUNRISE_LABEL} {formatSunTime(city.sys.sunrise)}
          </div>
          <div>
            {SUNSET_LABEL} {formatSunTime(city.sys.sunset)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCards;
