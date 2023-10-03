import React from "react";
import "../styles/exposition.css";
import bois_flotte from "../data/bois_flotte.json";
import Navigation from "./Navigation";
import ImageSlider from "../components/ImageSlider";


const Exposition = () => {
   
const slides = bois_flotte.map((e)=> e.url);

  // const slides = [
  //   {url: "http://localhost:3000/images/ameublements/am_img1.jpg",  title: "boite", alt:"tronc"},
  //   {url: "http://localhost:3000/images/ameublements/am_img2.jpg",  title: "boite", alt:"tronc"},
  //   {url: "http://localhost:3000/images/ameublements/am_img3.jpg",  title: "banc", alt:"tronc"},
  //   {url: "http://localhost:3000/images/ameublements/am_img4.jpg",  title: "curb", alt:"tronc"}
  // ];
   console.log(slides)

  const containerStyles = {
    width: '450px',
    height: "450px",
    margin: "50px auto",
  };

  return (
    <section className="exposition">
      <Navigation />
      <div className="corpsProduits">
        <div style={containerStyles}>
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
