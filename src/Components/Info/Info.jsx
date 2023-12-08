import React from "react";
import "./info.scss";
export default function Info({ isCelsius, city }) {
  function operationNum(num) {
    if (isCelsius) {
      return (num - 273).toFixed(1);
    } else {
      return (1.8 * (num - 273) + 32).toFixed(1);
    }
  }

  return (
    <div className="my-5 container info rounded-3 p-5">
      <div className="row">
        <div className="col-3">
          <h2 className="text-white display-1 fw-bold">
            {operationNum(city.temp)}°
          </h2>
          <p className="text-white fs-2 ">
            {city.name}, {city.country}
          </p>
        </div>
        <div className="col-3 text-center">
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
        <div className="col-3 text-center">
          <h2 className="text-white mb-5 display-3">{city.weather}</h2>
          <p className="text-white mb-0 fs-5">{city.weatherDesc}</p>
        </div>
        <div className="col-3 text-center fw-bold">
          <img src="https://miguel-ch.github.io/assets_repo/weather//04n.svg" />
        </div>
      </div>
    </div>
  );
}
