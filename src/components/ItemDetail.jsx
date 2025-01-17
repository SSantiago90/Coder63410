import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import cartContext from "../context/cartContext";

function ItemDetail(props) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { price, title, description, text, img, id, stock } = props;
  const { addItem } = useContext(cartContext);

  function onSubmitCount(count) {
    console.log(`Agregaste ${count} unidades al carrito`);
    addItem({ id, price, title, count, img });
    setIsAddedToCart(true);
  }

  return (
    <div>
      <img src={img} width="150" height="150" alt="product img" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <div>
          <p>$ {price}</p>
        </div>
        <p>{description}</p>
      </div>
      <div>
        {isAddedToCart ? (
          <button>Ver Carrito</button>
        ) : (
          <ItemCount onSubmitCount={onSubmitCount} max={stock} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
