import React from "react";
import { useState, useEffect } from "react";
import "../styles/exposition.css";

const ImageSlider = ({ slides, bdd, objet, categoriesList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [panier, setPanier] = useState([]);
  const [sommeTotale, setSommeTotale] = useState(0);

  const listeDansCategoryActive = bdd.filter(
    (e) => e.category === categoriesList[objet]
  );

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

  const produitAAjouterAuPanier = bdd.filter(
    (e) => e.category === categoriesList[objet]
  )[currentIndex];

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

  const ajouterAuPanier = () => {
    panier.push(produitAAjouterAuPanier);
    const somme = panier.map((e) => e.price).reduce((n1, n2) => n1 + n2);
    setSommeTotale(somme);
    // Stockez le panier dans le localStorage
    localStorage.setItem("panier", JSON.stringify(panier));
    console.log(panier.length);
  };
  useEffect(() => {
    // Récupérez le panier depuis le localStorage
    const savedPanier = localStorage.getItem("panier");

    // Si le panier existe dans le localStorage, mettez à jour l'état local
    if (savedPanier) {
      setPanier(JSON.parse(savedPanier));
    }
    // console.log(panier.length);
  }, []);



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

      <div className="etiquette">
        <h2>
          {titles[currentIndex]} {prices[currentIndex]} €
        </h2>
        <button onClick={ajouterAuPanier}>Ajoutez au panier</button>
      </div>
      <div className="dotContainerStyle">
        {slides.map((_, index) => (
          <div key={index} onClick={() => goToSlide(index)}>
            ●
          </div>
        ))}
      </div>

      {/* <img src="http://localhost:3000/images/icons/arrow_right.png" alt="Description de l'image" /> */}
    </div>
  );
};

export default ImageSlider;
