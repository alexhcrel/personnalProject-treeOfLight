import { useState } from "react";
import "../styles/exposition.css";



const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
      backgroundImage: `url(${slides[currentIndex]})`,
    }

    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    } ;


    return <div className="sliderStyle">
      {/* <img src="http://localhost:3000/images/icons/arrow_left.png" alt="Description de l'image" /> */}
        <div className="defilement">
          <div className = "leftArrowStyle" onClick={goToPrevious}>‹</div>
          <div className="slideStyle" style={slideStyles}></div>
          <div className="rightArrowStyle" onClick={goToNext}>›</div>
        </div>
        <div className = "dotContainerStyle">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
              ●
              </div>
          ))}
        </div>

      {/* <img src="http://localhost:3000/images/icons/arrow_right.png" alt="Description de l'image" /> */}
    </div>
};

export default ImageSlider;
