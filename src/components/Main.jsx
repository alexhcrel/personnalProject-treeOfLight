import React from "react";
import "../styles/main.css";
import Navigation from "../components/Navigation";
import Panier from "../components/Panier";

const Main = () => {
  return (
    <section className="main">
      <Navigation />
      <div className="corps">
        <img src="/images/IMG_7115.png"  alt="tronc" />
      </div>
    </section>
  );
};

export default Main;
