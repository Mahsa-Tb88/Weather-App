import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";
import Detail from "./Components/Detail/Detail";
import { getCity } from "./utils/api";
import { Toaster } from "react-hot-toast";
export default function App() {
  const [search, setSearch] = useState("Tabriz");
  const [isCelsius, setIsCelsius] = useState(false);

  const [city, setCity] = useState({
    name: "",
    country: "",
    temp: "",
    tempMax: "",
    tempMin: "",
    feeling: "",
    weather: "",
    weatherDesc: "",
    windSpeed: "",
    humidity: "",
    clouds: "",
    timezone: "",
    weatherIconUrl: "",
  });

  useEffect(() => {
    async function fetchData() {
      const cityInfo = await getCity(search);

      const d = new Date();
      const offset = d.getTimezoneOffset() * 60;
      const date = new Date((cityInfo.dt + offset + cityInfo.timezone) * 1000);

      const options = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };

      const formattedDate = date.toLocaleDateString("en-US", options);

      setCity({
        name: cityInfo.name,
        country: cityInfo.sys.country,
        temp: cityInfo.main.temp,
        tempMax: cityInfo.main.temp_max,
        tempMin: cityInfo.main.temp_min,
        feeling: cityInfo.main.feels_like,
        weather: cityInfo.weather[0].main,
        weatherDesc: cityInfo.weather[0].description,
        windSpeed: cityInfo.wind.speed,
        humidity: cityInfo.main.humidity,
        clouds: cityInfo.clouds.all,
        timezone: formattedDate,
        weatherIconUrl: `https://openweathermap.org/img/wn/${cityInfo.weather[0].icon}@2x.png`,
      });
    }
    fetchData();
  }, [search]);

  return (
    <div className=" app">
      <Toaster />
      <div className="d-flex justify-content-start align-items-center title">
        <img
          className="logo"
          alt="logo"
          src="https://miguel-ch.github.io/assets_repo/weather//logo_earth.svg"
        />
        <h1 className=" py-4 p-3">Weather Status</h1>
      </div>
      <div className="main ">
        <div className="container">
          <Header
            setIsCelsius={setIsCelsius}
            isCelsius={isCelsius}
            setSearch={setSearch}
          />
          <Info isCelsius={isCelsius} city={city} />
          <Detail city={city} />
        </div>
      </div>
    </div>
  );
}
