import React from "react";
import "../styles/banner.css";

const Banner = () => {
    return (
      <header className="banner">
        <div className="bandeau">
          <h1>Tree of Light</h1>
          <h3>"Faites entrer la nature chez vous"</h3>
        </div>
        <div className="degrade"></div>

      </header>
    );
  };

export default Banner;