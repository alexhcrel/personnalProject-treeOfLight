import React from 'react';
import "../styles/modale.css";
import { useState } from "react";

// import "../modales.js";
import Panier from "../components/Panier";

const Modale = ({viderLePanier, panier, setPanier, style, closeModale}) => {
    // const text = props.textToInsert;

// const [styleDeLaModale, setStyleDeLaModale] = useState({ display: "flex" })


  return (
    
<div className="modale" style={style}>
<p>Hello</p>

 <Panier panier = {panier} viderLePanier={viderLePanier} setPanier = {setPanier} />

 <button onClick = {closeModale}> Fermer le panier</button>

 </div>
  );
};

export default Modale;
