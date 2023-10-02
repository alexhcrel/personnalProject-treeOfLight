import React from "react";
import Banner from "../components/Banner";
import ImageSlider from "../components/ImageSlider";


const Produits = () => {
  const slides = [
    {src: "/images/ameublements/img1.jpg",  title: "boite", alt:"tronc"},
    {src: "/images/ameublements/img2.jpg",  title: "banc", alt:"tronc"},
    {src: "/images/ameublements/img3.jpg",  title: "curb", alt:"tronc"},
    {src: "/images/ameublements/img4.jpg",  title: "coffre", alt:"tronc"}
  ]

  return (
    
    <div className="home">
      <Banner />
      <ImageSlider slides={slides}/>
 
       {/* <Travaux id="travaux" /> */}
       {/* <AboutMe id="about" /> */}
      {/* <Contact id = "contact" /> */}
    </div>
  );
};

export default Produits;