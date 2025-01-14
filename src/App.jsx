import "./App.css";

import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";

function App() {
  // 2. Renderizamos el context.Provider

  // 3. Le damos un valor (value) al provider
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Compras navideñas" />}
          />
          <Route
            path="/category/:catid"
            element={<ItemListContainer greeting="Compras por categoría" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <footer>
          <small>Created by Coderhouse 2025.</small>
        </footer>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
