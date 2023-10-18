import React from "react";
import "../styles/modale.css";
import { useState } from "react";

// import "../modales.js";
// import Panier from "../components/Panier";

const Modale = ({ viderLePanier, panier, setPanier, style, closeModale }) => {
  let sommeTotaleAPayer = 0;
  let listeDesPrix = 0;

  const supprimerUnProduit = (produitId) => {
    // Filtrer le panier pour exclure le produit avec l'ID spécifié
    const nouveauPanier = panier.filter((e) => e.id !== produitId);
    setPanier(nouveauPanier);
    window.location.reload();
    localStorage.setItem("panier", JSON.stringify(nouveauPanier));
  };

  if (panier.length != 0) {
    listeDesPrix = panier.map((e) => e.price);
    sommeTotaleAPayer = listeDesPrix.reduce((n1, n2) => n1 + n2);
  }

  // const text = props.textToInsert;

  // const [styleDeLaModale, setStyleDeLaModale] = useState({ display: "flex" })

  return (
    <div className="modale" style={style}>
      <h2>VOTRE PANIER</h2>
      <div className="listeAchats">
        {panier.map((e) => (
          <div className="produitSurLaListe">
            <h4>- {e.title} </h4>
            <h4>{e.price} €</h4>
            <button onClick={() => supprimerUnProduit(e.id)}>
              Supprimer ce produit
            </button>
          </div>
        ))}
      </div>

      <div className="totalDeMesAchats">
        <h2>Total à Payer : </h2>
        <h2>{sommeTotaleAPayer} €</h2>
        <div className="gestionDuPanier">
          <button>Valider le panier</button>
          <button onClick={viderLePanier}>Vider le panier</button>
        </div>
      </div>

      <button onClick={closeModale} className="fermeturePanier"> Fermer le panier</button>
    </div>
  );
};

export default Modale;
