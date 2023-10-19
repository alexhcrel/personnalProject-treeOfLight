import React, {useState} from "react";
import "../styles/main.css";
import Navigation from "../components/Navigation";


const Main = () => {


  return (
    <section className="main">
      <Navigation />
      <div className="corps">
        <img src="/images/IMG_7115.png" alt="tronc" />
      </div>
      <div className="commandes"></div>
    </section>
  );
};

export default Main;
