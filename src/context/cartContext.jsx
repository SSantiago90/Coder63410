// * 1. Crear un Context -> createContext
import { createContext } from "react";

const cartContext = createContext("carrito");

export function CartContextProvider(props) {
  return (
    <cartContext.Provider
      value={{
        cartItems: [],
        curso: "React",
        name: "carrito de compras",
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;
