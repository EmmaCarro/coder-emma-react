import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import Galeria from "./pages/Galeria";
import Carrito from "./pages/Carrito";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App(){
    return (        
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/category/:categoryId" element={<Galeria />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="carrito" element={<Carrito />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App;