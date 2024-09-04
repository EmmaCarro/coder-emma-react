import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { GiJumpingDog } from "react-icons/gi";

function Layout() {
    return (
        <div>
            <header className="nav-container sticky-top" >
                <NavBar brandoicon={<GiJumpingDog />}/>
            </header>
            <main className="cover-container d-flex w-100 h-100 flex-column bg-light py-5">
                <Outlet />
            </main>
            <footer className="footer py-2 bg-light fixed-bottom">
                <p className="text-muted text-center">Aprovecha las últimas ofertas: Todos los viernes 25% de descuento con MODO</p>
            </footer>
        </div>
    )
}

export default Layout;