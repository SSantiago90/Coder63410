import { useCart } from "../context/cartContext";
export default function CartWidget() {
  const context = useCart();

  return (
    <div className="cart-icon">
      🛒
      {context.countItemsInCart() > 0 && (
        <span className="cart-count">{context.countItemsInCart()}</span>
      )}
    </div>
  );
}
