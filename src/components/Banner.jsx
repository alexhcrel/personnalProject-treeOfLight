import React from "react";

// import { NavLink } from "react-router-dom";
import "../styles/banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="title_div">
        <div className="defilement">
          <h1>Tree of Light </h1>
        </div>
        <div className = "paragraphe">
          <p>A travers cette page, je vous invite à découvrir mes compétences et mes réalisations...</p>
          <p className="spacer"></p>
          <p>Passionné de Javascript, j'apprécie tout particulièremenet le framework REACT, mais j'utilise volontiers d'autres technologies telles que NodeJS pour le backend...</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
