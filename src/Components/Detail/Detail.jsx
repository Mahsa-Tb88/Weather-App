import React from "react";
import "./detail.scss";
export default function Detail({ city }) {
  return (
    <div className="detail ">
      <div className="row">
        <div className="col-4  ">
          <div className="section rounded-2 p-4 d-flex justify-content-between align-items-center">
            <div>
              <img
                className="wind"
                src="https://miguel-ch.github.io/assets_repo/weather//wind_2.svg"
                alt="logo"
              />
            </div>
            <div>
              <h5 className="fs-2">Wind Speed</h5>
              <p className="fs-4 text-white">{city.windSpeed}m/s</p>
            </div>
          </div>
        </div>
        <div className="col-4  ">
          <div className="section rounded-2 p-4 d-flex justify-content-between align-items-center">
            <div>
              <img className="Humidity" alt="logo" src="https://miguel-ch.github.io/assets_repo/weather//humidity_2.svg" />
            </div>
            <div>
              <h5 className="fs-2">Humidity</h5>
              <p className="fs-4 text-white">{city.humidity}%</p>
            </div>
          </div>
        </div>
        <div className="col-4  ">
          <div className="section rounded-2 p-4 d-flex justify-content-between align-items-center">
            <div>
              <img className="Cloudiness" alt="logo" src="https://miguel-ch.github.io/assets_repo/weather//cloudiness.svg" />
            </div>
            <div>
              <h5 className="fs-2">Cloudiness</h5>
              <p className="fs-4 text-white">{city.clouds}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
