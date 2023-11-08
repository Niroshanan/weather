import Image from "next/image";
import React from "react";

const SingleWeatherCard = ({ city, index }) => {
  let bgindex = index % 5;
  let cardBackgroundColor;
  if (bgindex % 5 == 0) {
    cardBackgroundColor = "bg-blue-500";
  } else if (bgindex % 5 == 1) {
    cardBackgroundColor = "bg-purple-500";
  } else if (bgindex % 5 == 2) {
    cardBackgroundColor = "bg-green-500";
  } else if (bgindex % 5 == 3) {
    cardBackgroundColor = "bg-orange-500";
  } else if (bgindex % 5 == 4) {
    cardBackgroundColor = "bg-red-500";
  }

  const t = city.dt;
  const Timestamp = new Date(t * 1000);
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const dateOptions = {
    month: "short",
    day: "numeric",
  };
  const formattedTime = Timestamp.toLocaleString("en-US", timeOptions);
  const formattedDate = Timestamp.toLocaleString("en-US", dateOptions);
  const date = `${formattedTime}, ${formattedDate}`;

  const sunriseTimestamp = city.sys.sunrise;
  const sunriseDate = new Date(sunriseTimestamp * 1000);

  const sunsetTimestamp = city.sys.sunset;
  const sunsetDate = new Date(sunsetTimestamp * 1000);

  return (
    <div
      className={`h-fit  grid grid-rows-3 relative group text-xs md:text-base ${cardBackgroundColor}`}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl font-bold">
          {city.name},{city.sys.country}
        </div>
        <div>{date}</div>
      </div>

      <div className="grid grid-cols-2 p-6 ">
        <div className="col-span-1 flex flex-col items-center relative border-r ">
          <div>
            <Image
              src={`/Icon/${city.weather[0].description}.png`}
              width={40}
              height={40}
              alt={`${city.weather[0].description}.png`}
            />
          </div>
          <div>{city.weather[0].description}</div>        
        </div>

        <div className="col-span-1 flex flex-col items-center">
          <div className="text-4xl font-bold">{Math.round(city.main.temp)}&#8451;</div>
          <div>Temp Min: {Math.round(city.main.temp_min)}&#8451;</div>
          <div>Temp Max: {Math.round(city.main.temp_max)}&#8451;</div>
        </div>
      </div>

      <div className="grid grid-cols-3   items-center bg-gray-700">
        <div className="h-full col-span-1 flex flex-col justify-center items-center relative ">
          <div>Pressure: {city.main.pressure}hPa </div>
          <div>Humidity: {city.main.humidity}% </div>
          <div>Visibility: {((city.visibility)/1000).toFixed(1)}Km </div>
          <div className="border-r border-gray-600 absolute h-20 top-5 bottom-5 right-0"></div>
        </div>
        <div className=" h-full col-span-1 flex flex-col justify-center items-center relative ">
          <div>
            <Image
              src="/Icon/deg.png"
              width={22}
              height={22}
              alt="degree Image"
            />
          </div>
          <div>
            {city.wind.speed}m/s {city.wind.deg} Degree
          </div>

          <div className="border-r border-gray-600 absolute h-20 top-5 bottom-5 right-0"></div>
        </div>
        <div className="h-full col-span-1 flex flex-col justify-center items-center">
          <div>
            Sunrise: {sunriseDate.toLocaleTimeString("en-US", timeOptions)}
          </div>
          <div>
            Sunset: {sunsetDate.toLocaleTimeString("en-US", timeOptions)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWeatherCard;
