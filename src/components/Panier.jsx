import React from "react";
import "../styles/panier.css";


const Panier = ({viderLePanier, panier, setPanier}) => {

    const supprimerUnProduit = (produitId) => {
        // Filtrer le panier pour exclure le produit avec l'ID spécifié
        const nouveauPanier = panier.filter((e) => e.id !== produitId);
        setPanier(nouveauPanier)

        // Mettre à jour le panier en utilisant la fonction fournie
        // viderLePanier(nouveauPanier);

         // Mettre à jour le panier dans le localStorage
        localStorage.setItem('panier', JSON.stringify(nouveauPanier));




    };
    
    

return (
<div>    
    <h1>panier</h1>
    <div className = "listeAchats">
        {panier.map((e) =>
            <div key={e.id} className="produitSurLaListe">
                <div>{e.title}</div>
                <div>{e.price} €</div>
                <button onClick={() => supprimerUnProduit(e.id)}>Supprimer ce produit</button>
            </div>
        )}
    </div>

    {/* <button onClick = {cancelLastProduct}>effacer le dernier produit</button> */}
    <button onClick = {viderLePanier}>Vider le panier</button>
</div>
);
};

export default Panier;