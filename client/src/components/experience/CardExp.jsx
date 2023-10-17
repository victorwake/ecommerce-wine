import { useState } from 'react';
import style from './experience.module.css';
import PropTypes from "prop-types";

export default function CardExp({ image, name }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (currentImageIndex < image.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const previousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className={style.container_card_experience}>
      <div className={style.box_card_experience}>
        <div className={style.box_img_experience}>
          <img
            height="200px"
            src={image[currentImageIndex]}
            alt={name}
          />
          <div className={style.image_navigation}>
            {currentImageIndex > 0 && (
              <button onClick={previousImage}>Anterior</button>
            )}
            {currentImageIndex < image.length - 1 && (
              <button onClick={nextImage}>Siguiente</button>
            )}
          </div>
        </div>
        <div className={style.box_name_experience}>
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
            }

  CardExp.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}