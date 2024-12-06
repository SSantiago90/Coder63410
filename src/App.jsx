import codersvg from "./assets/ch.svg";
import Button from "./components/Button";
import CardProduct from "./components/CardProduct";
import FlexContainer from "./components/FlexContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import Title from "./components/Title";

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
      <section style={{ display: "none" }}>
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
      </section>

      <section>
        <h2>Clase 4 -Componentes</h2>
        <Button text="Iniciar sesión" />
        <Button text="Registro" disabled={true} />
        <Button text="Hola coder!" color="purple" />
      </section>

      <section>
        <FlexContainer>
          {/* ACA VAN LOS CHILDREN */}
          <CardProduct
            price={25.5}
            title="Remera Coder"
            text="Best remera!"
            img="/images/javascript.bmp"
          />
          <CardProduct
            price={15.5}
            title="Gorra React"
            text="Best gorra!"
            img="/images/javascript.bmp"
          />
          <CardProduct
            price={35.5}
            title="Campera Javascript"
            text="Best campera!"
            img="/images/javascript.bmp"
          />
        </FlexContainer>
      </section>
      <section>
        <Title size={52}>
          <h3>Afterclass - CSS y Props</h3>
        </Title>
        {/* button, h1, h2, p, label*/}
        {/* Podemos usar esta manera ? sin el style y sin la class? */}
      </section>
    </>
  );
}

export default App;
