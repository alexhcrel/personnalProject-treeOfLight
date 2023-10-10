import React from "react";
import "../styles/exposition.css";
import bdd from "../data/bdd.json";
import Navigation from "./Navigation";
import ImageSlider from "../components/ImageSlider";
import { Link } from "react-router-dom";

const Exposition = ({objet}) => {
  const categoriesList = [...new Set(bdd.map((e) => e.category))];

  let objetPrev = null;
  const calculCatToPlayPrev = (objet) => {
    if (parseInt(objet) === 0) {
      objetPrev = categoriesList.length - 1
    } else {
      objetPrev = parseInt(objet) - 1;
    }
  };
  calculCatToPlayPrev(objet)

  let objetNext = null;
  const calculCatToPlayNext = (objet) => {
    if (parseInt(objet) === categoriesList.length - 1) {
      objetNext = 0
    } else {
      objetNext = parseInt(objet) +1
    }
  };
  calculCatToPlayNext(objet)
  
  const currentIndex = objet;

  let categoryPourImageDePrev = null;
  const changeCategoryPrev = (objet, categoriesList) => {
    if (objet == 0) {
      categoryPourImageDePrev = categoriesList.length - 1;
    } else {
      categoryPourImageDePrev = parseInt(objet) - 1;
    }
  };
  changeCategoryPrev(objet, categoriesList);

    let categoryPourImageDeNext = null;
  const changeCategoryNext = (objet, categoriesList) => {
    if (objet == categoriesList.length - 1) {
      categoryPourImageDeNext = 0;
    } else {
      categoryPourImageDeNext = parseInt(objet) + 1;
    }
  };
  changeCategoryNext(objet, categoriesList);

  const slides =[]
    function listeDesUrl(x) {
      x.forEach((e) => {
        if (e.category == categoriesList[currentIndex]) {
          slides.push(e.url);
        }
    });
  }

  const slidesPrev = bdd.filter((e) => e.category === categoriesList[categoryPourImageDePrev])[0].url
  const slidesNext = bdd.filter((e) => e.category === categoriesList[categoryPourImageDeNext])[0].url

  listeDesUrl(bdd)
   const prevStyles = {
    backgroundImage: `url(${slidesPrev})`,
  };

  const nextStyles = {
    backgroundImage: `url(${slidesNext})`,
  };




  return (
    <section className="exposition">
      <Navigation />
      <div className="corpsProduits">
        <div className="containerStyles">
          <ImageSlider slides={slides} bdd={bdd} objet={objet} categoriesList={categoriesList}/>
        </div>
        <div className="link">
          <Link className="linkSize linkPrev" style={prevStyles} to={`/produits/${objetPrev}`}>prev</Link>
          <Link className="linkSize linkNext" style={nextStyles} to={`/produits/${objetNext}`}>next</Link>
        </div>
      </div>
      <div className="commandes">
        <h2>test</h2>

      </div>
    </section>
  );
};

export default Exposition;
