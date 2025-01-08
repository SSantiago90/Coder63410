import { useState, useEffect } from "react";
import { getAsyncItemById } from "../data/getAsyncData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      const data = await getAsyncItemById(id);
      setProduct(data);
    }
    getProduct();
  }, [id]);

  return <ItemDetail {...product} />;
}

export default ItemDetailContainer;
