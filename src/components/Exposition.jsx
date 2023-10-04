import React from "react";
import { useState } from "react";
import "../styles/exposition.css";
import bdd from "../data/bdd.json";
import Navigation from "./Navigation";
import ImageSlider from "../components/ImageSlider";

const Exposition = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const categoriesList = [...new Set(bdd.map((e) => e.category))];

  const goToPrevious = () => {
    const isFirstCategory = currentIndex === 0;
    const newIndex = isFirstCategory ? categoriesList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastCategory = currentIndex === categoriesList.length - 1;
    const newIndex = isLastCategory ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

const slides =[]
  function listeDesUrl(x) {
    x.forEach((e) => {
      if (e.category == categoriesList[currentIndex]) {
        slides.push(e.url);
      }
    });
  }

  listeDesUrl(bdd)
  
// const slides = slide.map((e)=> e.url);

  // const slides = [
  //   {url: "http://localhost:3000/images/ameublements/am_img1.jpg",  title: "boite", alt:"tronc"},
  //   {url: "http://localhost:3000/images/ameublements/am_img2.jpg",  title: "boite", alt:"tronc"},
  //   {url: "http://localhost:3000/images/ameublements/am_img3.jpg",  title: "banc", alt:"tronc"},
  //   {url: "http://localhost:3000/images/ameublements/am_img4.jpg",  title: "curb", alt:"tronc"}
  // ];

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
          <div className="linkSize linkPrev" onClick={goToPrevious}>prev</div>
          <div className="linkSize linkNext" onClick={goToNext}>next</div>
        </div>
      </div>
      <div className="commandes">
        <h2>test</h2>

      </div>
    </section>
  );
};

export default Exposition;
