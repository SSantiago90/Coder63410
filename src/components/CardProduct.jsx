import Button from "./Button";
import styles from "./cardproduct.module.css";

function CardProduct(props) {
  const { price, title, text, img } = props;

  return (
    <div className={styles.card}>
      <img src={img} width="150" height="150" alt="product img" />
      <div className={styles["card-body"]}>
        <h3 className={styles["card-title"]}>{title}</h3>
        <p className={styles["card-text"]}>{text}</p>
        <div>
          <p className={styles["card-price"]}>$ {price}</p>
        </div>
        <Button>Agregar al carrito</Button> {/* children */}
      </div>
    </div>
  );
}

export default CardProduct;
//rfce
