import React from "react";
import "../styles/exposition.css";
import choix_bdd from "../data/choix_bdd.json";
import bois_flotte from "../data/bois_flotte.json";
import ameublements from "../data/ameublements.json";
import lampes from "../data/lampes.json";

import Navigation from "./Navigation";
import ImageSlider from "../components/ImageSlider";


const Exposition = () => {
   

  const bdd = Array(0).fill(lampes,).fill(ameublements)


console.log(bdd)

const slides = lampes.map((e)=> e.url);

  // const slides = [
  //   {url: "http://localhost:3000/images/ameublements/am_img1.jpg",  title: "boite", alt:"tronc"},
  //   {url: "http://localhost:3000/images/ameublements/am_img2.jpg",  title: "boite", alt:"tronc"},
  //   {url: "http://localhost:3000/images/ameublements/am_img3.jpg",  title: "banc", alt:"tronc"},
  //   {url: "http://localhost:3000/images/ameublements/am_img4.jpg",  title: "curb", alt:"tronc"}
  // ];
   console.log(slides)

  // const containerStyles = {
  //   width: '450px',
  //   height: "450px",
  //   margin: "50px auto",
  // };

  return (
    <section className="exposition">
      <Navigation />
      <div className="corpsProduits">
        <div className="containerStyles">
          <ImageSlider slides={slides}/>
        </div>
        <div className="link">
          <div className="linkSize linkPrev">prev</div>
          <div className="linkSize linkNext">next</div>
        </div>
      </div>
      <div className="commandes">
        <h2>test</h2>

      </div>
    </section>
  );
};

export default Exposition;
