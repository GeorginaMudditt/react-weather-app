import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <h1>World Weather</h1>
      <h2 className="date">Tuesday 5 November 11:27</h2>
      <h3 className="tagline">
        Search for the current and forecasted weather conditions
        <br /> for any city in the world
      </h3>
    </div>
  );
}
