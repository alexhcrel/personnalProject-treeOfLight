import React from "react";

// import Main from "../components/Main";
import Banner from "../components/Banner";
// import AboutMe from "../components/AboutMe";
// import Travaux from "../components/Travaux";
// import Contact from "../components/Contact";




const Home = () => {
    
    return (
      
      <div className="home">
        <Banner />
        <div><h1>en travaux</h1></div>
   
         {/* <Travaux id="travaux" /> */}
         {/* <AboutMe id="about" /> */}
        {/* <Contact id = "contact" /> */}
      </div>
    );
  };
  
  export default Home;