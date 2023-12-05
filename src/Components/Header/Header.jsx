import React from "react";

export default function Header() {
  return (
    <div className="row">
      <div className="col-8">
        <input
          type="text"
          placeholder="city name ..."
          className="serachInput w-75 rounded-2 "
        />
        <button className=" text-white searchbtn mx-2 rounded-2">Search</button>
      </div>
      <div className="col-4">
        <div className="row btngroup p-1 justify-content-center rounded-2">
          <div className="col-6 text-center">
            <button className="btn far w-75">Fahrenheit</button>
          </div>
          <div className="col-6 text-center">
            <button className="btn cel w-75">Celsius</button>
          </div>
        </div>
      </div>
    </div>
  );
}
