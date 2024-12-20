import getAsyncData from "../data/getAsyncData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

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

  return (
    <div>
      <ItemList greeting={props.greeting} products={products} />
    </div>
  );
}

export default ItemListContainer;
