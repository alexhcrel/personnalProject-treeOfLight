import React from 'react';
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
    <ul>
      <h2>Nos produits</h2>
      <div className="trait"></div>
      <li><a href="/produits">Nos lampes et appliques murales</a></li>
      <li><a href="/produits">Notre collection de bois flottés</a></li>
      <li><a href="/produits">Petits ameublements</a></li>
  
    </ul>
  </nav>
  );
};

export default Navigation;
