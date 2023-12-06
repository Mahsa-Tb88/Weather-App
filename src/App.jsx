import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";
import Detail from "./Components/Detail/Detail";
import { getCity } from "./utils/api";
export default function App() {
  const [search, setSearch] = useState("Tabriz");
  const [isCelsius, setIsCelsius] = useState(false);

  const [city, setCity] = useState({
    name: "",
    country: "",
    temp: "",
    tempMin: "",
    tempMax: "",
    feeling: "",
    weather: "",
    weatherDesc: "",
    windSpeed: "",
    humidity: "",
    clouds: "",
    timezone: "",
  });

  useEffect(() => {
    async function fetchData() {
      const cityInfo = await getCity(search);
      function operationNum(num) {
        if (isCelsius) {
          return (num - 273).toFixed(1);
        } else {
          return (1.8 * (num - 273) + 32).toFixed(1);
        }
      }

      const date = new Date(cityInfo.dt * 1000);

      // Format the date and time
      const options = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };

      const formattedDate = date.toLocaleDateString("en-US", options);

      // function getOrdinalSuffix(day) {
      //   if (day > 3 && day < 21) return "th";
      //   switch (day % 10) {
      //     case 1:
      //       return "st";
      //     case 2:
      //       return "nd";
      //     case 3:
      //       return "rd";
      //     default:
      //       return "th";
      //   }
      // }
      // const date = new Date((cityInfo.dt + cityInfo.timezone) * 1000);
      // const options = {
      //   month: "short",
      //   day: "numeric",
      //   hour: "2-digit",
      //   minute: "2-digit",
      //   hour12: true,
      // };
      // const cityTime = date.toLocaleString("en-US", options);
      setCity({
        ...city,
        name: cityInfo.name,
        country: cityInfo.sys.country,
        temp: operationNum(cityInfo.main.temp),
        tempMax: operationNum(cityInfo.main.temp_max),
        tempMin: operationNum(cityInfo.main.temp_min),
        feeling: operationNum(cityInfo.main.feels_like),
        weather: cityInfo.weather[0].main,
        weatherDesc: cityInfo.weather[0].description,
        windSpeed: cityInfo.wind.speed,
        humidity: cityInfo.main.humidity,
        clouds: cityInfo.clouds.all,
        timezone: formattedDate,
      });
    }
    fetchData();
  }, [search, isCelsius]);
  // useEffect(() => {
  //   function operationNum(num) {
  //     if (isCelsius) {
  //       return ((parseFloat(num) - 32) / 9.5).toFixed(1); //f->c
  //     } else {
  //       return (parseFloat(num) * 9.5 + 32).toFixed(1); //c->f
  //     }
  //   }

  //   setCity({
  //     ...city,
  //     temp: operationNum(city.temp),
  //     tempMax: operationNum(city.tempMax),
  //     tempMin: operationNum(city.tempMin),
  //     feeling: operationNum(city.feeling),
  //   });
  // }, [isCelsius]);
  return (
    <div className=" app">
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
          <Info search={search} city={city} />
          <Detail city={city} />
        </div>
      </div>
    </div>
  );
}
