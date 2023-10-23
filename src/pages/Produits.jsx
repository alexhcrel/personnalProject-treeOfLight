import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import Banner from "../components/Banner";
import Exposition from "../components/Exposition";
import Footer from "../components/Footer";
import "../styles/produits.css";

const Produits = () => {

  const numeroDeCategory = useParams();
  const objet = numeroDeCategory.produitCategory;
  return (
    <div className="produits">
      <Banner />
      <Exposition key={objet} objet={objet}/>
      <Footer />
    </div>
  );
};

export default Produits;