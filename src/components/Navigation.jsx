import React, { useState, useEffect } from 'react';
import "../styles/navigation.css";
import bdd from "../data/bdd.json";
import { openModal, openSousCategories, closeSousCategories } from '../modales';
import Modale from "../components/Modale";



const Navigation = () => {
  const [panier, setPanier] = useState([]);
  const categoriesList = [...new Set(bdd.map((e) => e.category))];
  // const objet = categoriesList.find((item) => item.category === numeroDeCategory)
  const categoryWithIndex = categoriesList.map((category, index) => ({
    index,
    category
}));


  // const hiddenBox = {
  //   opacity: '0',
  //   transition: 'opacity 450ms ease-in-out'
  // };

  // const visibleBox = {
  //   opacity: '1',
  //   transition: 'opacity 1000ms ease-in-out'
  // };

  // const [lifeStyle, setLifeStyle] = 
  //   useState(hiddenBox);

  // const changeLifeStyle = () => {
  //   setLifeStyle(visibleBox);
  // };

  // const initializeLifeStyle = () => {
  //   setLifeStyle({
  //       opacity: '0',
  //       transition: 'opacity 450ms ease-in-out'
  //   });
  // };

  useEffect(() => {
    // Récupérez le panier depuis le localStorage
    const savedPanier = localStorage.getItem("panier");
    console.log(savedPanier)

    // Si le panier existe dans le localStorage, mettez à jour l'état local
    if (savedPanier) {
      setPanier(JSON.parse(savedPanier));
    }
  }, []);  

  return (
    <nav className="navigation">
      <div className="trait"></div>
    <ul onMouseLeave={() => closeSousCategories()}>
      <h2><a href="/#">Accueil</a></h2>
      <h2 onMouseEnter={() => openSousCategories()}><a href="/produits/0" >Nos créations</a></h2>
      <div className='sousCategories' style={{display:'none'}}>
      {categoryWithIndex.map((e) => (
          <li className="category" key={e.index}><a href={`/produits/${e.index}`}>{e.category}</a></li>
        ))}
      </div>
      <h2 title="voir le panier" onClick={openModal}>Panier</h2>
    </ul>
    <Modale panier={panier} setPanier={setPanier}/>
  </nav>
  );
};

export default Navigation;
