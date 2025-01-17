import { useContext, useState, createContext } from "react";

const cartContext = createContext(null);

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addItem(itemInfo) {
    // Antes de agregar un item
    // -> verificamos que no exista previamente
    const isInCart = cartItems.some((item) => item.id === itemInfo.id);
    // find -> devuelve el objeto encontrado / undefined
    // some -> devuelve true/false
    // findIndex -> devuelve el indice

    const newCartState = [...cartItems];

    if (!isInCart) {
      newCartState.push(itemInfo);
    }
    // Si ya existia -> actualizamos su "count"
    else {
      const indexInCart = cartItems.findIndex(
        (item) => item.id === itemInfo.id
      );
      newCartState[indexInCart].count += itemInfo.count;
    }

    setCartItems(newCartState);
  }

  function countItemsInCart() {
    let totalItems = 0;
    cartItems.forEach((item) => (totalItems += item.count));
    return totalItems;
  }

  return (
    <cartContext.Provider value={{ cartItems, addItem, countItemsInCart }}>
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;

export function useCart() {
  return useContext(cartContext);
}
