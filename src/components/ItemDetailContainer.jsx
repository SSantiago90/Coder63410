import { useState, useEffect } from "react";
import { getAsyncItemById } from "../data/getAsyncData";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      const data = await getAsyncItemById(1);
      setProduct(data);
    }
    getProduct();
  }, []);

  return <ItemDetail {...product} />;
}

export default ItemDetailContainer;
