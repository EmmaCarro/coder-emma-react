import {Link, useParams} from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";


function Galeria(){
    //truquete par el display de la categoria en el titulo
    const { categoryId } = useParams();
    const categoryTitles = {
        juguetes: "Juguetes",
        alimentos: "Alimentos",
        transporte: "Transporte",
        cuidado: "Cuidado"
    };
    const greeting = categoryTitles[categoryId] || "Galeria";
    
    return (
        <div className="album text-center d-flex w-100 h-100 p-3 mx-auto flex-column">
            <div className="px-5 ">
                <ItemListContainer greeting={greeting} />
                <Link className="nav-item btn btn-lg btn-secondary fw-bold border-black my-5" to="/">Volver</Link>
            </div>
        </div>
    )
}
export default Galeria;