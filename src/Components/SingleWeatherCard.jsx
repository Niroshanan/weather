import Image from "next/image";
import React from "react";
import { formatDate, formatSunTime } from "../utils/loadDateTime";
import { getCardBgColour } from "../utils/getCardBgColour";
import {
  BACK_ICON_ALT_NAME,
  BACK_ICON_PATH,
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
import { useRouter } from "next/router";

const SingleWeatherCard = ({ city, index }) => {
  const router = useRouter();
  const backButtonHandler = () => {
    router.push("/");
  };
  return (
    <div className={`single-weather-card ${getCardBgColour(index)}`}>
      <button className="back-icon" onClick={backButtonHandler}>
        <Image
          src={BACK_ICON_PATH}
          width={25}
          height={25}
          alt={BACK_ICON_ALT_NAME}
        />
      </button>

      <div className="location-time">
        <div className="location">
          {city.name},{city.sys.country}
        </div>
        <div className="time">{formatDate(city.dt)}</div>
      </div>

      <div className="forecast-details">
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

      <div className="environment-info">
        <div>
          <div>
            {PRESSURE_LABEL} {city.main.pressure}
            {PRESSURE_UNIT}
          </div>
          <div>
            {HUMIDITY_LABEL} {city.main.humidity}{PERCENTAGE_UNIT}
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
              className="degree-icon"
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

export default SingleWeatherCard;
