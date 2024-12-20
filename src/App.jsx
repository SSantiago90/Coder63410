import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <div id="ejemploentrega">
        {/* <Navbar/> -> <CartWidget /> --> 🛒(5) */}
        <ItemListContainer greeting="Compras navideñas" />
        {/* ItemDetailContainer */}
      </div>
      <section>
        <ItemCount />
      </section>
    </>
  );
}

export default App;
