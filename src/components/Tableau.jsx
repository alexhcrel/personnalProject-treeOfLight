import React from "react";
import "../styles/tableau.css";

const Tableau = ({ objet }) => {
  // Créez des tableaux à partir des propriétés de l'objet
  const covers = objet.map((item) => item.cover);
  const links = objet.map((item) => item.link);
  const descriptions = objet.map((item) => item.description);
  const titles = objet.map((item) => item.title);
  const array = objet.map((item) => item.langages);
  const encart = objet.map((item) => item.encart);
  

    return (
    <div className="tableau">
      <div className= "cards">
         {/* Utilisez les tableaux pour afficher vos données */}
      {titles.map((title, index) => (
        <div className="card" key={index}>
          <a href={links[index]} target="_blank" rel="noreferrer" message={encart[index]}>
            <img src={covers[index]} alt={title} />
          </a>
          <div className= "descriptif">
            <h2>{title}</h2>
            <h3>Technologies utilisées : "{array[index].join(', ')}"
            </h3>
            <p className="modale">{descriptions[index]}</p>
          </div>
        </div>
      ))}
      </div>
     
    </div>
  );
};

export default Tableau;
