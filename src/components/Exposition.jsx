import React from "react";
import "../styles/exposition.css";
import jsonData from "../data/pieces.json";
import Navigation from "./Navigation";
import ImageSlider from "../components/ImageSlider";


const Exposition = () => {
   
const slides = jsonData.map((e)=> e.url);

  // const slides = [
  //   {url: "http://localhost:3000/images/ameublements/am_img1.jpg",  title: "boite", alt:"tronc"},
  //   {url: "http://localhost:3000/images/ameublements/am_img2.jpg",  title: "boite", alt:"tronc"},
  //   {url: "http://localhost:3000/images/ameublements/am_img3.jpg",  title: "banc", alt:"tronc"},
  //   {url: "http://localhost:3000/images/ameublements/am_img4.jpg",  title: "curb", alt:"tronc"}
  // ];
   console.log(slides)

  const containerStyles = {
    width: '450px',
    height: "600px",
    margin: "50px auto",
  };

  return (
    <section className="exposition">
      <Navigation />
      <div className="corps">
      <div className="prout" style={containerStyles}>
        
        <ImageSlider slides={slides}/>
      </div>
      </div>
      <div className="commandes">
        <h2>test</h2>

      </div>
    </section>
  );
};

export default Exposition;
