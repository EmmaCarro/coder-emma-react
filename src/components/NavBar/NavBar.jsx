import React, { useContext } from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext/CartContext";
import { ImCart } from "react-icons/im";
import { GiJumpingDog } from "react-icons/gi";

const NavBar = () => {
    const {cart} = useContext(CartContext)
    return (
        <div>
            <nav className="navbar navbar-custom navbar-expand-lg">
                    <div className="navbar-left">
                        <div className="d-flex justify-content-center align-items-center mb-lg-0 text-dark text-decoration-none mx-5">
                            <h2 className="me-2">Schnau</h2>
                            <NavLink className="Cart navicon navbar-brand" to="/">
                                {<GiJumpingDog />}
                            </NavLink>
                            <h2>Zaar</h2>
                        </div>

                        <ul className="navbar navbar-nav navbar-custom navbar-expand-lg">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={"/"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={"/category/juguetes"}>Juguetes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={"/category/alimento"}>Alimento</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={"/category/transporte"}>Transporte</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={"/category/cuidado"}>Cuidado</NavLink>
                            </li>
                        </ul>

                        <NavLink className="text-decoration-none text-dark align-items-center ms-5" to={"/cart"}>
                            <div className="cart-widget">
                                <div className="cart-icon">
                                    {<ImCart />}
                                </div>
                                <span>{cart.length}</span>
                            </div>
                        </NavLink>
                    </div>
                </nav>
        </div>
    )
}

export default NavBar;