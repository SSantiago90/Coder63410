import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <div id="ejemploentrega">
        {/* <Navbar/> -> <CartWidget /> --> 🛒(5) */}
        <ItemListContainer greeting="Compras navideñas" />
        <hr />
        <ItemDetailContainer />
      </div>
    </>
  );
}

export default App;
