import { useParams, useNavigate } from "react-router-dom";
import React from "react";

import Banner from "../components/Banner";
import Exposition from "../components/Exposition";

const Produits = () => {

  const numeroDeCategory = useParams();


  const objet = numeroDeCategory.produitCategory;
  return (
    <div className="home">
      <Banner />
      <Exposition key={objet} objet={objet}/>
    </div>
  );
};

export default Produits;