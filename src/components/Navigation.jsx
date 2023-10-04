import React from 'react';
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="trait"></div>
    <ul>
    <h2><a href="/#">Main page</a></h2>

    <h2><a href="/produits">Nos produits</a></h2>
      
      <li><a href="/produits">Nos lampes et appliques murales</a></li>
      <li><a href="/produits">Notre collection de bois flottés</a></li>
      <li><a href="/produits">Petits ameublements</a></li>
  
    </ul>
  </nav>
  );
};

export default Navigation;
