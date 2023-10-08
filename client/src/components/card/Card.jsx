import style from "./card.module.css";

export default function Card({ image, name, color_type, varietal, winery, price, id }) {
  return (
    <div className={style.container_card}>
      <div className={style.box_card}>
        <div className={style.box_img}>
          <img height="200px" src={image} alt={name} />
        </div>
        <div className={style.box_name}>
          <h2>
            {color_type} {name}
          </h2>
        </div>
        <div className={style.box_varietal}>
          <h4>{varietal}</h4>
        </div>
        <div className={style.box_winary}>
          <h4>{winery}</h4>
        </div>
        <div className={style.box_price}>
          <h4>{price}</h4>
        </div>
      </div>
    </div>
  );
}
