import React from 'react';
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
    <ul>
      <li><a href="/#">Accueil</a></li>
      <li><a href="#about">A propos</a></li>
      <li><a href="#competences">Compétences</a></li>
      <li><a href="#travaux">Travaux</a></li>
      <li><a href="#contact">Contact</a></li>

    </ul>
  </nav>
  );
};

export default Navigation;
