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

    return <div style={sliderStyles}>
      <img src="http://localhost:3000/images/icons/arrow_left.png" alt="Description de l'image" />
        <div style={slideStyles}></div>
      <img src="http://localhost:3000/images/icons/arrow_right.png" alt="Description de l'image" />
    </div>
};

export default ImageSlider;
