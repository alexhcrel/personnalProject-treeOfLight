
export function addFormEventListener() {
  const formulaire = document.getElementById("formulaire");
  formulaire.addEventListener("submit", function () {
    const alert = document.querySelector(".alert");

    // Vérifier s'il y a déjà un bouton de suppression dans l'alerte
    const boutonSuppressionExistant = alert.querySelector(".boutonSuppression");
    if (boutonSuppressionExistant) {
      boutonSuppressionExistant.remove(); // Supprimer le bouton précédent s'il existe
    }

    // Créer un nouveau bouton de suppression
    const suppression = document.createElement("button");
    suppression.className = "boutonSuppression";
    suppression.innerText = "OK";
    alert.appendChild(suppression);

    alert.style.opacity = "1";

    if (alert.style.opacity === "1") {
      const boutonSuppression = document.querySelector(".boutonSuppression");
      boutonSuppression.addEventListener("click", function () {
        alert.style.opacity = "0";
        formulaire.reset();
      });
    }
  });
}