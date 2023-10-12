import style from "./experience.module.css";
import React, { useState } from 'react'

export default function CardExp({ name, image}) {
  const [imagen, setImage]  = useState("");

  if (Array.isArray(image) && image.length > 1) {
    setImage(image[0])
  }


  return (
    <div className={style.container_card_experience}>
      <div className={style.box_card_experience}>
      <div className={style.box_img_experience}>
      <img height="200px" src="www.bodegacolome.com/wp-content/uploads/2020/03/bodega_about_final.jpg" alt={name} />
           {/* <div>
            {image.map((image, index) => (
              <img key={index} height="200px" src={image} alt={`Image ${index}`} />
            ))}
          </div> */}
        </div>
      <div className={style.box_name_experience}>
          <h2>
             {name}
          </h2>
          </div>

          </div>
    </div>
  );
}
