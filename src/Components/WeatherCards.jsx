import Image from "next/image";
import React from "react";

const WeatherCards = ({ city ,index}) => {
  let bgindex =index%5; 
  let cardBackgroundColor;
  if(bgindex %5 == 0 ){
    cardBackgroundColor = "bg-blue-500"
  }
  else if(bgindex %5 == 1 ){
    cardBackgroundColor = "bg-purple-500"
  }else if(bgindex %5 == 2 ){
    cardBackgroundColor = "bg-green-500"
  }else if(bgindex %5 == 3 ){
    cardBackgroundColor = "bg-orange-500"
  }else if(bgindex %5 == 4 ){
    cardBackgroundColor = "bg-red-500"
  }
  else{
    cardBackgroundColor = "bg-blue-500"
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
    <div className = {`h-80 md:72  grid grid-rows-2 relative group text-xs md:text-base ${cardBackgroundColor}`}>
      <div className="grid grid-cols-5 p-6">
        <div className="col-span-3">
          <div className="flex flex-col justify-center items-center">
            <p className="sm:text-xl font-bold text-sm">
              {city.name}, {city.sys.country}
            </p>
            <p>{date}</p>
            <div className=" grid grid-cols-2 justify-center items-center">
              <div className=" flex justify-center">
                <Image
                  src={`/Icon/${city.weather[0].description}.png`}
                  width={25}
                  height={25}
                  alt={`${city.weather[0].description}.png`}
                />
              </div>
              <div className=" flex items-center justify-center">
                <p>{city.weather[0].description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl">{city.main.temp} &#8451;</p>
            <p>Temp Min: {Math.round(city.main.temp_min)}&#8451;</p>
            <p>Temp Max: {Math.round(city.main.temp_max)}&#8451;</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3   items-center bg-gray-700">
        <div className="h-full col-span-1 flex flex-col justify-center items-center text-sm relative">
        <div>Pressure: {city.main.pressure}hPa </div>
          <div>Humidity: {city.main.humidity}% </div>
          <div>Visibility: {((city.visibility)/1000).toFixed(1)}Km </div>
          <div className="border-r border-gray-600 absolute h-20 top-8 bottom-5 right-0"></div>
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

          <div className="border-r border-gray-600 absolute h-20 top-8 bottom-5 right-0"></div>
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

export default WeatherCards;
