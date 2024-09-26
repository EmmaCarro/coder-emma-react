import {NavLink} from "react-router-dom";

function Error(){
    return(
        <div className="cover-container text-center d-flex w-100 h-100 p-3 mx-auto flex-column">
            <main className="px-3">
                <h1 className="mt-5">ERROR 404</h1>
                <p className="lead m-3">Página no encontrada</p>
                <NavLink className="nav-item btn btn-lg btn-secondary fw-bold border-black mt-5" to="/">Volver</NavLink>
            </main>
        </div>
    )
}
export default Error;