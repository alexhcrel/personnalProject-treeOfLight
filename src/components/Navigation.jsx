import React from 'react';
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
    <ul>
      <h2>Nos produits</h2>
      <li><a href="/#">Nos lampes et appliques murales</a></li>
      <li><a href="#about">Notre collection de bois flottés</a></li>
      <li><a href="#competences">Petits ameublements</a></li>

    </ul>
  </nav>
  );
};

export default Navigation;
