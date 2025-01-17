import { Link } from "react-router-dom";
import { memo } from "react";
import Button from "./Button";
import "./CardProduct.css";

function Item(props) {
  const { price, title, text, img, id, discount, stock, freeDelivery } = props;

  const classNameCard = `card ${freeDelivery ? "card_accent" : ""}`;

  return (
    <div className={classNameCard}>
      <img src={img} alt="product img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <div>
          <p
            style={{ color: discount ? "green" : "inherit" }}
            className="card-price"
          >
            $ {price}
          </p>
          {discount && "Producto en oferta!"}
        </div>
        {freeDelivery && "Envío gratis!"}
        <Link to={`/item/${id}`}>
          <Button>Ver Detalle</Button>
        </Link>
      </div>
    </div>
  );
}

// ! Memo solo para edge cases / casos extremos
// 1. Memo tiene un costo -> no siempre mejora la performance
// 2. React 19 -> memo ya no sirve -> compiler
// 3. Empeora la mantenibilidad del código

export default memo(Item, (prevProps, newProps) => {
  return prevProps.id === newProps.id;
});
