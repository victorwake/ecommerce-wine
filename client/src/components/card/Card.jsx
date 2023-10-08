import style from "./card.module.css";

export default function Card({ image, name, color_type, varietal, winery, price, id }) {
  return (
    <div>
      <div>
        <div>
          <img height="200px" src={image} alt={name} />
        </div>
        <div>
          <h2>
            {color_type} {name}
          </h2>
        </div>
        <div>
          <h4>{varietal}</h4>
        </div>
        <div>
          <h4>{winery}</h4>
        </div>
        <div>
          <h4>{price}</h4>
        </div>
      </div>
    </div>
  );
}
