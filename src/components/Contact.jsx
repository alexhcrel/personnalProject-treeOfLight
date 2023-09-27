import React, { useRef, useEffect } from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import { addFormEventListener } from "../formulaire.js";
// import { closeAlert } from "../formulaire.js";


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_1uwwxuc", "template_rez0ub8", form.current, "CszOsh67nSqUTygNb").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  useEffect(() => {
    addFormEventListener();
  }, []);


  return (
    <section className="contact" id="contact">
      <>
        <h1>Contact</h1>
        <p>
          N'hésitez pas à me contacter à cette adresse : {" "}
          <a href="mailto:alexandre.lerch@yahoo.fr">alexandre.lerch@gmail.com</a>
        </p>
        <p> ou via le formulaire ci-dessous :</p>
        <form ref={form} onSubmit={sendEmail} id="formulaire">
        <label>Votre prénom :</label>
        <input type="text" name="prenom" id="prenom"></ input>
        <label>Votre nom :</label>
        <input type="text" name="nom" id="nom"></ input>
        <label>Votre email :</label>
        <input type="email" name="email" id="email"></ input>
        <label>Sujet :</label>
        <input type="text" name="sujet" id="sujet"></ input>
        <label for="ameliorer">Votre message :</label>
        <textarea name="message" id="message"></textarea>
        <div>
        <input type="submit" value="Envoyer" id="submit"></input>
        </div>
        </form>

<div className="alert">
        <p id="remerciement">Merci beaucoup, je vous répondrai très vite...</p>
        {/* <button onclick="closeCustomAlert()">OK</button> */}
</div>
      </>
    </section>
  );
};

export default Contact;
