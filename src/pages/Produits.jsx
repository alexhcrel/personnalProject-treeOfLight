import React from "react";
import Banner from "../components/Banner";
import ImageSlider from "../components/ImageSlider";
import "../styles/imageSlider.css";


const Produits = () => {
  const slides = [
    {url: "http://localhost:3000/images/ameublements/am_img1.jpg",  title: "boite", alt:"tronc"},
    {url: "http://localhost:3000/images/ameublements/am_img2.jpg",  title: "boite", alt:"tronc"},
    {url: "http://localhost:3000/images/ameublements/am_img3.jpg",  title: "banc", alt:"tronc"},
    {url: "http://localhost:3000/images/ameublements/am_img4.jpg",  title: "curb", alt:"tronc"}
  ];

  const containerStyles = {
    width: '450px',
    height: "280px",
    margin: "110px auto",
  };

  return (
    
    <div className="home">
      <Banner />
      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>
       {/* <Travaux id="travaux" /> */}
       {/* <AboutMe id="about" /> */}
      {/* <Contact id = "contact" /> */}
    </div>
  );
};

export default Produits;