import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/georgina-mudditt/"
          target="_blank"
          rel="noreferrer"
        >
          Georgina Mudditt
        </a>
        , is open-sourced on{" "}
        <a
          href="https://github.com/GeorginaMudditt/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , and is hosted on{" "}
        <a
          href="https://gm-react-weather-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </p>
    </div>
  );
}
