import React from "react";



const Panier = () => {

const cancelLastProduct = () => {
// Récupérer la liste des clés dans le localStorage
const keys = Object.keys(localStorage);

// Vérifier si des clés existent
if (keys.length > 0) {
  // Trouver la clé la plus récente en utilisant la dernière clé dans la liste des clés
  const lastKey = keys[keys.length - 1];

  // Supprimer la clé la plus récente
  localStorage.removeItem(lastKey);
} else {
  console.log("Le localStorage est vide, rien à supprimer.");
}



    // const panierInitial = localStorage.getItem("panier");
    // panierInitial.pop
    // console.log(panierInitial)
}

return (
<div>
    
    
    <h1>panier</h1>

    <button onClick = {cancelLastProduct}>effacer le dernier produit</button>
</div>
);
};

export default Panier;