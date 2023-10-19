import React from "react";
import "../styles/exposition.css";
import bdd from "../data/bdd.json";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import ImageSlider from "../components/ImageSlider";
// import Panier from "../components/Panier";
import ResumeDuPanier from "../components/ResumeDuPanier";
// import Modale from "../components/Modale";

import { Link } from "react-router-dom";

const Exposition = ({ objet }) => {
  const categoriesList = [...new Set(bdd.map((e) => e.category))];

  const tableauDeLaCategoryActive = bdd.filter(
    (e) => e.category === categoriesList[objet]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const produitAAjouterAuPanier = bdd.filter(
    (e) => e.category === categoriesList[objet]
    )[currentIndex];
  const [panier, setPanier] = useState([]);
  // const [sommeTotale, setSommeTotale] = useState(0);


//////////////////////////////////////////////////////////////////////
  //Cette partie gère la navigation dans les différentes catégories
//////////////////////////////////////////////////////////////////////


  let objetPrev = null;
  const calculCatToPlayPrev = (objet) => {
    if (parseInt(objet) === 0) {
      objetPrev = categoriesList.length - 1;
    } else {
      objetPrev = parseInt(objet) - 1;
    }
  };
  calculCatToPlayPrev(objet);

  let objetNext = null;
  const calculCatToPlayNext = (objet) => {
    if (parseInt(objet) === categoriesList.length - 1) {
      objetNext = 0;
    } else {
      objetNext = parseInt(objet) + 1;
    }
  };
  calculCatToPlayNext(objet);

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

  const slides = [];
  function listeDesUrl(x) {
    x.map((e) => slides.push(e.url));
  }


  //////////////////////////////////////////////////////////////////////
  // sélection des images pour la navogation entre les catégories
//////////////////////////////////////////////////////////////////////
  const slidesPrev = bdd.filter(
    (e) => e.category === categoriesList[categoryPourImageDePrev]
  )[0].url;
  const slidesNext = bdd.filter(
    (e) => e.category === categoriesList[categoryPourImageDeNext]
  )[0].url;

  listeDesUrl(tableauDeLaCategoryActive);
  const prevStyles = {
    backgroundImage: `url(${slidesPrev})`,
  };

  const nextStyles = {
    backgroundImage: `url(${slidesNext})`,
  };

//////////////////////////////////////////////////////////////////////
  // Cette partie gère le panier
//////////////////////////////////////////////////////////////////////
console.log(panier.map((e)=>e.id))
console.log(produitAAjouterAuPanier.id)
  const ajouterAuPanier = () => {
    if (panier.map((e)=>e.id).includes(produitAAjouterAuPanier.id)){
      alert ("déjà mis")
    }else{
    panier.push(produitAAjouterAuPanier);
    localStorage.setItem("panier", JSON.stringify(panier));
    window.location.reload();
    };
  };

  useEffect(() => {
    // Récupérez le panier depuis le localStorage
    const savedPanier = localStorage.getItem("panier");

    // Si le panier existe dans le localStorage, mettez à jour l'état local
    if (savedPanier) {
      setPanier(JSON.parse(savedPanier));
    }
  }, []);

  const contenuDuLocalStorage = localStorage.getItem("panier");
  console.log(JSON.parse(contenuDuLocalStorage));
  console.log(panier)

  return (
    <section className="exposition">
      <Navigation />
      <div className="corpsProduits">
        <div className="containerStyles">
          <ImageSlider
            slides={slides}
            bdd={bdd}
            objet={objet}
            categoriesList={categoriesList}
            ajouterAuPanier={ajouterAuPanier}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
        <div className="link">
          <Link
            className="linkSize linkPrev"
            style={prevStyles}
            to={`/produits/${objetPrev}`}
          >
            prev
          </Link>
          <Link
            className="linkSize linkNext"
            style={nextStyles}
            to={`/produits/${objetNext}`}
          >
            next
          </Link>
        </div>
      </div>
      <ResumeDuPanier panier = {panier} setPanier = {setPanier} />
      {/* <Modale panier = {panier} viderLePanier={viderLePanier} setPanier = {setPanier}/> */}
    </section>
  );
};

export default Exposition;
