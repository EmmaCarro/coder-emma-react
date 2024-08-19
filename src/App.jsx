import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App(){
    return (
        <div>
            <div className="titulo">
                <h1 className="text-center">Schnau-Bar</h1>
                <h3 className="text-center">- tu bar de mascotas -</h3>
            </div>
            <NavBar />
            <ItemListContainer greeting="Hola, bienvenido a Schnau-bar!" />
        </div>
    )
}

export default App;