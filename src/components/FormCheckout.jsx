import { useState } from "react";

export default function Form() {
  function onSubmit() {
    console.log(`Gracias por tu compra ${name}`);
  }

  const [userData, setUserData] = useState({
    username: "",
    surname: "",
    age: "",
  });

  function onInputChange(evt) {
    //1. Que input modificamos
    const inputName = evt.target.name;
    // 2. Copiar el state
    const newUserData = { ...userData };
    // 3. modifico el nuevo objecot
    newUserData[inputName] = evt.target.value;
    // 4. update del state
    setUserData(newUserData);
  }

  // DRY
  return (
    <form>
      <h2>Completa tus datos para completar la compra🛍</h2>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
        <input name="username" type="text" onChange={onInputChange} />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Apellido</label>
        <input name="surname" type="text" onChange={onInputChange} />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Edad</label>
        <input name="age" type="text" onChange={onInputChange} />
      </div>

      <button
        disabled={
          !(
            userData.username !== "" &&
            userData.surname !== "" &&
            userData.age !== ""
          )
        }
        onClick={(evt) => onSubmit(evt)}
      >
        Crear orden
      </button>
    </form>
  );
}
