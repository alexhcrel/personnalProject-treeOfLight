import React from 'react';
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
    <ul>
      <h2>Nos produits</h2>
      <div className="trait"></div>
      <li><a href="/#">Nos lampes et appliques murales</a></li>
      <li><a href="/#">Notre collection de bois flottés</a></li>
      <li><a href="/#">Petits ameublements</a></li>
  
    </ul>
  </nav>
  );
};

export default Navigation;
