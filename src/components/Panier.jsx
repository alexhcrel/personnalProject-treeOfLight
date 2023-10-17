import React from "react";
import "../styles/panier.css";


const Panier = ({viderLePanier, panier, setPanier}) => {
    let sommeTotaleAPayer = 0;
    let listeDesPrix = 0;
    const supprimerUnProduit = (produitId) => {
        // Filtrer le panier pour exclure le produit avec l'ID spécifié
        const nouveauPanier = panier.filter((e) => e.id !== produitId);
        setPanier(nouveauPanier)
        window.location.reload();

        // Mettre à jour le panier en utilisant la fonction fournie
        // viderLePanier(nouveauPanier);

         // Mettre à jour le panier dans le localStorage
        localStorage.setItem('panier', JSON.stringify(nouveauPanier));
    };
    console.log(panier)

    if (panier.length !=0) {
        listeDesPrix = panier.map((e) => e.price);
        sommeTotaleAPayer = listeDesPrix.reduce((n1, n2) => n1 +n2)
    }

return (
<div className="votrePanier">    
    <h2>votre panier</h2>
    <div className = "listeAchats">
        {panier.map((e) =>
            <div key={e.id} className="produitSurLaListe">
                <div>{e.title} - {e.price} €</div>
                <div></div>
                <button onClick={() => supprimerUnProduit(e.id)}>Supprimer ce produit</button>
            </div>
            
        )}
    </div>
    
    <div className="totalDeMesAchats">
        <h2>TOTAL A PAYER : </h2>
        <h2>{sommeTotaleAPayer} €</h2>
    </div>
    {/* <button onClick = {cancelLastProduct}>effacer le dernier produit</button> */}
    <button onClick = {viderLePanier}>Vider le panier</button>
</div>
);
};

export default Panier;