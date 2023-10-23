import React from "react";
import "../styles/home.css";

import Main from "../components/Main";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
// import AboutMe from "../components/AboutMe";
// import Contact from "../components/Contact";




const Home = () => {
    
    return (
      
      <div className="home">
        <Banner />
        <Main />
        <Footer />
      </div>
    );
  };
  
  export default Home;