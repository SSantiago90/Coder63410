import { useContext } from "react";
import cartContext from "../context/cartContext";

export default function CartWidget() {
  //4. Conectamos un componente al context (useContext())
  const context = useContext(cartContext);
  console.log("Context--->", context);

  return (
    <div className="cart-icon">
      🛒
      <span className="cart-count">1</span>
    </div>
  );
}
