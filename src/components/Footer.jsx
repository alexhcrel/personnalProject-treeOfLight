import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="organisationFooter">
        <div className="infoFooter">
          {" "}
          <ul>
            <h3>Navigation</h3>
            <li>Accueil</li>
            <li>Lampes</li>
            <li>Ammeublements</li>
            <li>Bois flotté</li>
          </ul>
          <ul>
            <h3>Réseaux sociaux</h3>
            <li>
              <a>facebook</a>
            </li>
            <li>eatsy</li>
          </ul>
          <ul>
            <h3>nous contacter</h3>
            <li>alexandre.lerch@yahoo.fr</li>
            <li>eatsy</li>
          </ul>
        </div>
      </div>
      <div className="pub">
        <p>copyright @2023 Tree Of Light - Tous droits réservés</p>
        <p>site réalisé par alerch.fr</p>
        <a>alexandre.lerch@yahoo.fr</a>
      </div>
    </footer>
  );
};

export default Footer;
