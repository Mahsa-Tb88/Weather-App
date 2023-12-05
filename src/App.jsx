import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";
import Detail from "./Components/Detail/Detail";
export default function App() {
  return (
    <div className=" app">
      <h1 className="title py-4 p-3">Weather Status</h1>
      <div className="main ">
        <div className="container">
          <Header />
          <Info />
          <Detail />
        </div>
      </div>
    </div>
  );
}
