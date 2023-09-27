import React from "react";
import "../styles/aboutMe.css";

const AboutMe = () => {
  return (
    <section className="aboutMe" id="about">
      <div className="a_propos">
        <h1>A propos de moi...</h1>
        <p>
          Je suis <strong>Alexandre Lerch, développeur fullstack</strong> en freelance. Après avoir exploré différents milieux professionnels, je me suis lancé dans le développement web.
          <br /><br />
          Formé auprès de l'organisme "<strong>OpenClassrooms</strong>", je maitrise les principales technologies utilisées actuellement.
          <br />
          <br />
          Particulièrement soigneux, j'apporte une importance particulière à la propreté de mes réalisations et à la qualité de mes échanges avec mes clients.

        </p>
        <div className="liens">
          <a href="https://www.linkedin.com/in/alexandre-lerch/" target="_blank" rel="noreferrer" message="Consultez mon profil linkedin !">
            <img src="linkedin-icon-svgrepo-com.svg" alt="Icône linkedin"></img>
          </a>
          {/* <a href="https://www.instagram.com/openclassrooms/" target="_blank" rel="noreferrer">
            <img src="icons8-instagram.svg" alt="Icône Instagram"></img>
          </a> */}
          <a href="https://github.com/alexhcrel?tab=repositories" target="_blank" rel="noreferrer" message="Consultez ma page github !">
            <img src="icons8-github.svg" alt="Icône github"></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
