// * 1. Crear un Context -> createContext
import { createContext, useState } from "react";

const cartContext = createContext("carrito");

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([
    { id: 0, item: 1, count: 20 },
    { id: 10, item: 2, count: 4 },
  ]);

  function removeItem(id) {
    //cartItems.find // { item: 2, count: 4 },
    //cartItems.findIndex(10) //  1 -> splice
    const newCartState = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartState);
  }

  function addItem({ price, id, title, img, count }) {
    //const copyCartItems = [...cartItems];
    //const copyCartItems = cartItems.map(item => item);
    const copyCartItems = JSON.parse(JSON.stringify(cartItems));
    copyCartItems.push({
      id: id,
      title: title,
      img: img,
      count: count,
      price: price,
    });
    setCartItems(copyCartItems);

    // setCartItems( [...cartItems, { id, title, img, count, price}]);
  }

  // * 1. Agregar un item al carrito // addItem()
  // 2. Eliminar todos los items del carrito -> clear
  // * 3. removeItem(itemId, quantity) // Remover un item del cart por usando su id
  // * 4. Contar los items del carrito // countItemsInCart()

  function countItemsInCart() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  return (
    <cartContext.Provider
      value={{
        cartItems,
        countItemsInCart,
        addItem,
        removeItem,
        name: "carrito de compras",
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;
