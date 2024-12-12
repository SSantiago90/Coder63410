import { useState } from "react";

function ItemCount() {
  let [count, setCount] = useState(1);

  const handleAdd = () => {
    // Antes de modificar el estado -> VALIDAR que no excede un máximo (10)
    console.log("Suma");
    setCount(count + 1);
    // count = count +1
  };

  const handleSubstract = () => {
    // Antes de modificar el estado -> VALIDAR que no descienda de un min (1)
    console.log("Resta");
    setCount(count - 1);
  };

  // Cada vez que se RENDERIZA el componente
  // Cada vez que exista un cambio de estado, esto se ejecuta
  console.log("Renderizamos", count);

  return (
    <div>
      <button onClick={handleAdd}>+</button>
      <span>{count}</span>
      <button onClick={handleSubstract}>-</button>
    </div>
  );
}

export default ItemCount;
