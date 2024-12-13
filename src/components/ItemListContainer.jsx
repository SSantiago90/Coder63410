import CardProduct from "./CardProduct";
import FlexContainer from "./FlexContainer";
import getAsyncData from "../data/getAsyncData";
import { useState, useEffect } from "react";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  console.log("%cRender de ItemListContainer", "color: yellow");
  console.log(products);

  useEffect(() => {
    const respuestaPromise = getAsyncData();
    console.log(respuestaPromise);
    respuestaPromise
      .then((respuesta) => setProducts(respuesta))
      .catch((error) => alert(error));
  }, []);

  const list = products.map((prod) => (
    <CardProduct
      key={prod.id}
      id={prod.id}
      title={prod.title}
      price={prod.price}
      text={prod.category}
      img={prod.img}
    />
  ));

  return (
    <div>
      <h2>{props.greeting}</h2>
      <FlexContainer>{list}</FlexContainer>
    </div>
  );
}

export default ItemListContainer;
