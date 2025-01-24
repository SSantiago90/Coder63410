import { useContext } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/database";

function CartContainer() {
  const { cartItems, removeItem, getTotalPrice } = useContext(cartContext);

  async function handleCheckout() {
    const orderData = {
      buyer: {
        name: "Bruno",
        email: "brunitotutor@yahoo",
      },
      items: cartItems,
      total: getTotalPrice(),
      date: new Date(),
    };

    const newOrderID = await createBuyOrder(orderData);

    console.log("Compra realizada", newOrderID);
  }

  return (
    <div>
      <h1>Tu carrito</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>Unidades: {item.count}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
          <hr />
        </div>
      ))}
      <button onClick={handleCheckout}>Comprar</button>
    </div>
  );
}

export default CartContainer;
