import React, { useState } from 'react';
import "../styles/navigation.css";
import bdd from "../data/bdd.json";



const Navigation = () => {
  const categoriesList = [...new Set(bdd.map((e) => e.category))];
  // const objet = categoriesList.find((item) => item.category === numeroDeCategory)
  const categoryWithIndex = categoriesList.map((category, index) => ({
    index,
    category
}));

  const hiddenBox = {
    opacity: '0',
    transition: 'opacity 450ms ease-in-out'
  };

  const visibleBox = {
    opacity: '1',
    transition: 'opacity 1000ms ease-in-out'
  };

  const [lifeStyle, setLifeStyle] = 
    useState(hiddenBox);

  const changeLifeStyle = () => {
    setLifeStyle(visibleBox);
  };

  const initializeLifeStyle = () => {
    setLifeStyle({
        opacity: '0',
        transition: 'opacity 450ms ease-in-out'
    });
  };

  return (
    <nav className="navigation">
      <div className="trait"></div>
    <ul onMouseLeave={() => initializeLifeStyle()}>
      <h2><a href="/#">Accueil</a></h2>
      <h2 onMouseEnter={() => changeLifeStyle()}><a href="/produits/0" >Nos créations</a></h2>
      <div style={lifeStyle}>
      {categoryWithIndex.map((e) => (
          <li key={e.index}><a href={`/produits/${e.index}`}>{e.category}</a></li>
        ))}
      </div>
    </ul>
  
  </nav>
  );
};

export default Navigation;
