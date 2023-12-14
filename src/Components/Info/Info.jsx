import React, { useEffect, useState } from "react";
import "./info.scss";
export default function Info({ isCelsius, city }) {
  function operationNum(num) {
    if (isCelsius) {
      return (num - 273).toFixed(0);
    } else {
      return (1.8 * (num - 273) + 32).toFixed(0);
    }
  }
  console.log(city);
  useEffect(() => {
    async function getIconWeather() {
      try {
        const { data } = await axios.get(
          "https://openweathermap.org/img/wn/10d@2x.png"
        );
        return data;
      } catch (e) {}
    }
    getIconWeather();
  }, [city]);

  return (
    <div className="my-5 row info  p-5">
      <div className="col-12 col-md-6 col-lg-3 text-center">
        <h2 className="text-white display-1 fw-bold">
          {operationNum(city.temp)}°
        </h2>
        <p className="text-white fs-2 ">
          {city.name}, {city.country}
        </p>
      </div>
      <div className="col-12 col-md-6 col-lg-3 text-center">
        <h2 className="text-white mb-5 display-4">
          {operationNum(city.tempMin)}°/
          {operationNum(city.tempMax)}°
        </h2>
        <div>
          <p className="text-white mb-0 fs-5">
            Feels like {operationNum(city.feeling)}°
          </p>
          <p className="text-white mb-0 fs-5"> {city.timezone}</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 text-center">
        <h2 className="text-white mb-5 display-3">{city.weather}</h2>
        <p className="text-white mb-0 fs-5">{city.weatherDesc}</p>
      </div>
      <div className="col-12 col-md-6 col-lg-3 text-center fw-bold">
        <img src={city.weatherIconUrl} className="imgLogo" />
      </div>
    </div>
  );
}
