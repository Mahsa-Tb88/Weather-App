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
    <div className=" header row">
      <div className="col-12 col-lg-8 px-lg-0">
        <form
          onSubmit={submitHandler}
          className="mb-3 d-flex justify-content-lg-start justify-content-center align-items-center "
        >
          <input
            type="text"
            placeholder="city name ..."
            className="serachInput w-75 rounded-2 "
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-sm text-white searchbtn   mx-2 rounded-2"
          >
            Search
          </button>
        </form>
      </div>
      <div className="col-12 col-lg-4 ">
        <div className="row btngroup  py-1 ">
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
