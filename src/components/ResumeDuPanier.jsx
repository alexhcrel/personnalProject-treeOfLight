import React,  { useState }from "react";
import "../styles/panier.css";
import Modale from "../components/Modale";




const ResumeDuPanier = ({panier, viderLePanier, setPanier}) => {
    let sommeTotaleAPayer = 0;
    let listeDesPrix = 0;
    const [styleDeLaModale, setStyleDeLaModale] = useState({ display: "none"})

    const voirMonPanier = () => {
        
        setStyleDeLaModale({display: "flex"})
    }

    const closeModale = () => {
        setStyleDeLaModale({ display: "none" })
    }


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
    <button onClick={voirMonPanier}>Voir mon panier</button>
    <Modale style={styleDeLaModale} panier={panier} viderLePanier={viderLePanier} setPanier={setPanier} closeModale={closeModale}/>

</div>
);
};

export default ResumeDuPanier;