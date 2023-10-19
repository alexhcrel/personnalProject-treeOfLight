import React,  { useState }from "react";
import "../styles/resumeDuPanier.css";
import Modale from "../components/Modale";
import { openModal } from '../modales';



const ResumeDuPanier = ({panier}) => {
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
<div className="resumeDuPanier">    
    <h3>Votre panier</h3>
    
    <div className="totalDeMesAchats">
        <h3>Total à payer : </h3>
        <h2>{sommeTotaleAPayer} €</h2>
    </div>
    <button onClick={openModal}>Voir mon panier</button>
    <Modale panier={panier} />

</div>
);
};

export default ResumeDuPanier;