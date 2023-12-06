import React, { useState } from "react";
import "./header.scss";
export default function Header({ setIsCelsius, isCelsius, setSearch }) {
  const selectFar = ["btn  w-75", isCelsius ? "diselect" : "select"].join(" ");
  const selectCel = ["btn  w-75", isCelsius ? "select" : "diselect"].join(" ");
  const [inputValue, setInputValue] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    setSearch(inputValue);
  }
  return (
    <div className="row header">
      <div className="col-8">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="city name ..."
            className="serachInput w-75 rounded-2 "
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className=" text-white searchbtn mx-2 rounded-2">
            Search
          </button>
        </form>
      </div>
      <div className="col-4">
        <div className="row btngroup p-1 justify-content-center rounded-2">
          <div className="col-6 text-center">
            <button className={selectFar} onClick={() => setIsCelsius(false)}>
              Fahrenheit
            </button>
          </div>
          <div className="col-6 text-center ">
            <button className={selectCel} onClick={() => setIsCelsius(true)}>
              Celsius
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
