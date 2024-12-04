import codersvg from "./assets/ch.svg";
import "./App.css";

function App() {
  const titulo = "Clase 3 - JSX";
  const userFavoriteColor = "rgb(255, 50, 80)";

  function userGreeting(name) {
    //const saludo = "Bienvenido " + name + "a mi app.";
    const saludo = `Bienvenido ${name} a mi app`;
    return saludo;
  }

  function isUserLoggedIn() {
    return false;
  }

  function logIn() {
    alert("Bienvenido!");
  }

  return (
    <>
      <h1> {titulo} </h1>
      <img src={codersvg} alt="Coder logo" />
      <div className="card">
        <p>{userGreeting("Franco")}</p>
      </div>

      <p className="read-the-docs">Hola react ya instalé Vite!</p>

      <button
        onClick={logIn}
        disabled={isUserLoggedIn()}
        className="best-button-ever"
        style={{
          backgroundColor: userFavoriteColor,
          color: "white",
          textTransform: "uppercase",
          padding: "15px",
        }}
      >
        Comprar
      </button>
    </>
  );
}

export default App;
