import Image from "next/image";
import React from "react";

const WeatherCards = ({ city }) => {
  const time = new Date();

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const dateOptions = {
    month: "short",
    day: "numeric",
  };

  const formattedTime = time.toLocaleString("en-US", timeOptions);
  const formattedDate = time.toLocaleString("en-US", dateOptions);
  const date = `${formattedTime}, ${formattedDate}`;

  const sunriseTimestamp = city.sys.sunrise;
  const sunriseDate = new Date(sunriseTimestamp * 1000);

  const sunsetTimestamp = city.sys.sunset;
  const sunsetDate = new Date(sunsetTimestamp * 1000);

  return (
    <div>
      <div
        className="h-80 md:h-72  grid grid-rows-2 relative group bg-fuchsia-500 text-xs md:text-base"
        style={{
          background: `url("Icon/ViewWeather.png")`,
          backgroundSize: "cover",
          filter: "hue-rotate(50deg)",
        }}
      >
        <div className="grid grid-cols-5 p-6">
          <div className="col-span-3">
            <div className="flex flex-col justify-center items-center">
              <p className="sm:text-xl font-bold text-sm">
                {city.name}, {city.sys.country}
              </p>
              <p>{date}</p>
              <div className="flex items-center">
                <Image
                  src={`/Icon/${city.weather[0].description}.png`}
                  width={50}
                  height={50}
                  alt={`${city.weather[0].description}.png`}
                />
                <span>{city.weather[0].description}</span>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl">{city.main.temp}</p>
              <p>{city.main.temp_min}</p>
              <p>{city.main.temp_max}</p>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-3 p-4 bg-gray-700">
          <div className="flex flex-col justify-center text-sm">
            <p>Pressire: {city.main.pressure}hPa </p>
            <p>Humidity: {city.main.humidity}% </p>
            <p>Visibility: {city.visibility}Km </p>
          </div>
          <div className="flex flex-col justify-center items-center text-sm">
            <Image
              src="/Icon/deg.png"
              width={50}
              height={50}
              alt="degree Image"
            />
            <p>
              {city.wind.speed}m/s {city.wind.deg}
            </p>
          </div>
          <div className="flex flex-col justify-center items-end text-sm">
            <p>Sunrise: {sunriseDate.toLocaleTimeString()}</p>
            <p>Sunset: {sunsetDate.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCards;
