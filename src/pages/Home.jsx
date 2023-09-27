import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Travaux from "../components/Travaux";
import Contact from "../components/Contact";




const Home = () => {
    
    return (
    
      <div className="home">
         <Navigation />
         <Banner /
         ><Travaux id="travaux" />
         <AboutMe id="about" />
        <Contact id = "contact" />
      </div>
    );
  };
  
  export default Home;