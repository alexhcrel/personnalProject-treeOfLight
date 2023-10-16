import React from "react";
import { useState, useEffect } from "react";
import "../styles/exposition.css";

const ImageSlider = ({ currentIndex, setCurrentIndex, slides, bdd, objet, categoriesList, ajouterAuPanier }) => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [panier, setPanier] = useState([]);
  // const [sommeTotale, setSommeTotale] = useState(0);

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex]})`,
  };

  const titles = [];
  function listeDesTitles(x) {
    x.forEach((e) => {
      if (e.category == categoriesList[objet]) {
        titles.push(e.title);
      }
    });
  }
  listeDesTitles(bdd);

  const prices = [];
  function listeDesPrix(x) {
    x.forEach((e) => {
      if (e.category == categoriesList[objet]) {
        prices.push(e.price);
      }
    });
  }
  listeDesPrix(bdd);

  // const produitAAjouterAuPanier = bdd.filter(
  //   (e) => e.category === categoriesList[objet]
  // )[currentIndex];

  // Si currentIndex dépasse la longueur du tableau slides, réinitialisez-le à 0
  if (currentIndex >= slides.length) {
    setCurrentIndex(0);
  }
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  


  return (
    <div className="sliderStyle">
      <div className="defilement">
        <div className="leftArrowStyle" onClick={goToPrevious}>
          ‹
        </div>
        <div className="slideStyle" style={slideStyles}></div>
        <div className="rightArrowStyle" onClick={goToNext}>
          ›
        </div>
      </div>
      <div className="dotContainerStyle">
        {slides.map((_, index) => (
          <div key={index} onClick={() => goToSlide(index)}>
            ●
          </div>
        ))}
      </div>
      <div className="etiquette">
        <h2>{titles[currentIndex]}  </h2>
        <h3>{prices[currentIndex]} €</h3>
        <button onClick={ajouterAuPanier}>Ajoutez au panier</button>
      </div>


      {/* <img src="http://localhost:3000/images/icons/arrow_right.png" alt="Description de l'image" /> */}
    </div>
  );
};

export default ImageSlider;
