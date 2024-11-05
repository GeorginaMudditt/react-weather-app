import React from "react";
import "./Header.css";
import moment from "moment";

export default function Header() {
  let today = moment().format("dddd D MMMM HH:mm");
  return (
    <div className="Header">
      <h1>World Weather</h1>
      <h2 className="date">{today}</h2>
      <h3 className="tagline">
        Search for the current and forecasted weather conditions
        <br /> for any city in the world
      </h3>
    </div>
  );
}
