import React,  { useState }from "react";
import "../styles/resumeDuPanier.css";
import Modale from "../components/Modale";
import { openModal } from '../modales';





const ResumeDuPanier = ({panier, viderLePanier, setPanier}) => {
    let sommeTotaleAPayer = 0;
    let listeDesPrix = 0;
    // const [styleDeLaModale, setStyleDeLaModale] = useState({ display: "none"})

    // const voirMonPanier = () => {
        
    //     setStyleDeLaModale({display: "flex"})
    // }

    // const closeModale = () => {
    //     setStyleDeLaModale({ display: "none" })
    // }


    if (panier.length !=0) {
        listeDesPrix = panier.map((e) => e.price);
        sommeTotaleAPayer = listeDesPrix.reduce((n1, n2) => n1 +n2)
    }

return (
<div className="votrePanier">    
    <h2>votre panier</h2>
    
    <div className="totalDeMesAchats">
        <h2>TOTAL A PAYER : </h2>
        <h2>{sommeTotaleAPayer} €</h2>
    </div>
    <button onClick={openModal}>Voir mon panier</button>
    <Modale panier={panier} viderLePanier={viderLePanier} setPanier={setPanier} />

</div>
);
};

export default ResumeDuPanier;