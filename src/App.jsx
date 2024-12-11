import "./App.css";
import CardProduct from "./components/CardProduct";
import FlexContainer from "./components/FlexContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <>
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
        <ItemCount />
      </section>
    </>
  );
}

export default App;
