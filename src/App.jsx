import React from "react";
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import Error from "./components/Error/Error";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext/CartContextProvider";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <CartContextProvider>
      <div>
        <header className="nav-container sticky-top">
          <NavBar />
        </header>
        <main className="cover-container">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <footer className="footer">
          <p className="text-muted text-center">Aprovecha las últimas ofertas: Todos los viernes 25% de descuento con MODO</p>
        </footer>
      </div>
    </CartContextProvider>
  )
}

export default App
