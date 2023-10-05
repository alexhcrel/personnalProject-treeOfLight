import React, { useState } from 'react';
import "../styles/navigation.css";



const Navigation = () => {

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
      <h2><a href="/#">Main page</a></h2>
      <h2 onMouseEnter={() => changeLifeStyle()}><a href="/produits" >Nos produits</a></h2>
      <div style={lifeStyle}>
        <li><a  href="/produits">Nos lampes et appliques murales</a></li>
        <li><a href="/produits">Notre collection de bois flottés</a></li>
        <li><a  href="/produits">Petits ameublements</a></li>
      </div>
    </ul>
  
  </nav>
  );
};

export default Navigation;
