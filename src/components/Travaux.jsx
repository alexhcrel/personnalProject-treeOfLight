import React from "react";


import jsonData from "../data/travaux.json";
import "../styles/travaux.css";
// import "../modales.js";

const Travaux = () => {
    const objet = jsonData
    const covers = objet.map((item) => item.cover);
    const links = objet.map((item) => item.link);
    const descriptions = objet.map((item) => item.description);
    const titles = objet.map((item) => item.title);
    const array = objet.map((item) => item.langages);
    const encart = objet.map((item) => item.encart);
   

    return (
      <section className="travaux" id="travaux">
        <div>
          <h1>Nos produits</h1>
        </div>
        <div className= "cards">
        
          {titles.map((title, index) => (
              <div className="card" key={index}>
                <a href={links[index]} target="_blank" rel="noreferrer" message={encart[index]}>
                  <img src={covers[index]} alt={title} />
                </a>

                  <h2>{title}</h2>

              </div>
            ))}
        </div>
   
     
   
      </section>
        );

};

export default Travaux;