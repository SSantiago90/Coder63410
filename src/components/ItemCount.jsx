import { useState } from "react";

function ItemCount(props) {
  let [count, setCount] = useState(1);

  const handleAdd = () => {
    if (count === props.max) return;
    console.log("Suma");
    setCount(count + 1);
    // count = count +1
  };

  const handleSubstract = () => {
    // TODO: Antes de modificar el estado -> VALIDAR que no descienda de un min (1)
    console.log("Resta");
    setCount(count - 1);
  };

  function handleClick() {
    props.onClick(count);
  }

  return (
    <div>
      <div>
        <button onClick={handleAdd}>+</button>
        <span>{count}</span>
        <button onClick={handleSubstract}>-</button>
      </div>
      <div>
        <button onClick={handleClick}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
