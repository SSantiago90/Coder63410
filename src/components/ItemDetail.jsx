import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail(props) {
  const { price, title, description, text, img, stock } = props;

  function onSubmitCount(count) {
    console.log(`Agregaste ${count} unidades al carrito`);
  }

  return (
    <div className="">
      <img src={img} width="150" height="150" alt="product img" />
      <div className="">
        <h3 className="">{title}</h3>
        <p className="">{text}</p>
        <div>
          <p className="">$ {price}</p>
        </div>
        <p>{description}</p>
      </div>
      <div>
        <ItemCount onSubmitCount={onSubmitCount} max={stock} />
      </div>
    </div>
  );
}

export default ItemDetail;
