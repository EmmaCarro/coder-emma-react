import CartWidget from "../../components/CartWidget/CartWidget";
import CartImg from "../../img/cart.png";
import "../../App.css"

export const NavBar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar navbar-custom navbar-expand-lg">
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="#" className="nav-link">Juguetes</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Alimentos</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Transporte</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Cuidado</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Contactanos</a></li>
                </ul>
                <CartWidget img={CartImg} />
            </nav>
        </div>
    )
}

export default NavBar;