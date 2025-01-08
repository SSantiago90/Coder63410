import { Link } from "react-router-dom";

function ItemDetail(props) {
  const { price, title, description, text, img } = props;

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
        <button>Agregar al carrito</button>
      </div>
      <div>
        <p>Productos similares</p>
        <Link to="/item/10">Producto 10</Link>
      </div>
    </div>
  );
}

export default ItemDetail;
