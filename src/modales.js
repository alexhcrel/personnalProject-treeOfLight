//////Gestion de l'ouverture et de la fermeture du panier////////////

export const openModal = function() {
    const modale = document.querySelector('.modale');
    modale.style.display = 'flex'; // Afficher la modale en changeant le style 'display'
};

export const closeModal = function() {
    const modale = document.querySelector('.modale');
    modale.style.display = 'none'; // Cacher la modale en changeant le style 'display'
};

// const target = document.querySelector(".slideStyles");
// target.addEventListener('mouseenter', openModal); // Ouvrir la modale au survol
// target.addEventListener('mouseleave', closeModal); // Fermer la modale lorsque le survol s'arrête

/////////gestion de l'ouverture et de la fermeture des sous-categories////////
export const openSousCategories = function() {
    const sousCategories = document.querySelector('.sousCategories');
    sousCategories.style.display = 'flex'; // Afficher la modale en changeant le style 'display'
};

export const closeSousCategories = function() {
    const sousCategories = document.querySelector('.sousCategories');
    sousCategories.style.display = 'none'; // Cacher la modale en changeant le style 'display'
};