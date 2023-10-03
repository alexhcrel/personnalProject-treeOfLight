import { useState } from "react";
import "../styles/imageSlider.css";



const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

const sliderStyles = {
    height: '100%',
    position:'relative',
};

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const leftArrowStyle = {
      position: 'absolute',
      top: '50%',
      transform: 'translate(0, -50%)',
      left: '-82px',
      fontSize: '145px',
      zIndex: '1',
      cursor: 'pointer',
    }

    const rightArrowStyle = {
      position: 'absolute',
      top: '50%',
      transform: 'translate(0, -50%)',
      right: '-82px',
      fontSize: '145px',
      zIndex: '1',
      cursor: 'pointer',
    };

    const dotContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
    };

    const dotStyle = {
      margin: '0 3px',
      cursor: 'pointer',
      fontSize: '20px',
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


    return <div style={sliderStyles}>
      {/* <img src="http://localhost:3000/images/icons/arrow_left.png" alt="Description de l'image" /> */}
        <div style={leftArrowStyle} onClick={goToPrevious}>‹</div>
        <div style={slideStyles}></div>
        <div style={rightArrowStyle} onClick={goToNext}>›</div>
        <div style={dotContainerStyle}>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} style={dotStyle} onClick={() => goToSlide(slideIndex)}>
              ●
              </div>
          ))}
        </div>
      {/* <img src="http://localhost:3000/images/icons/arrow_right.png" alt="Description de l'image" /> */}
    </div>
};

export default ImageSlider;
