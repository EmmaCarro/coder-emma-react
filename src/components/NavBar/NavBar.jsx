import {Link} from "react-router-dom";
import CartWidget from "../../components/CartWidget/CartWidget";
import "../../App.css"
import { ImCart } from "react-icons/im";

export const NavBar = ({brandoicon}) => {
    return (
        <div>       
                <nav className="navbar navbar-custom navbar-expand-lg">
                    <div className="navbar-center">
                        <div className="d-flex justify-content-center align-items-center mb-lg-0 text-dark text-decoration-none mx-5">
                            <h2 className="me-2">Schnau</h2>
                            <Link className="Cart navicon navbar-brand" to="/">
                                {brandoicon}
                            </Link>
                            <h2>Zaar</h2>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to={`/category/juguetes`}>Juguetes</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={`/category/alimentos`}>Alimentos</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={`/category/transporte`}>Transporte</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={`/category/cuidado`}>Cuidado</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="*">Contacto</Link></li>
                        </ul>
                        <Link className="text-decoration-none text-dark align-items-center ms-5" to="/carrito"><CartWidget img={<ImCart />} /></Link>
                    </div>
                </nav>
        </div>
    )
}

export default NavBar;