import { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
   
    //Para agregar items al cart
    const addItem = (item, q) => {
        const existingItem = cart.find((el) => el.id === item.id);
        if (existingItem) {
            setCart(
                cart.map((el) =>
                    el.id === item.id ? { ...el, quantity: el.quantity + q } : el
                )
            );
        } else {
            setCart([...cart, { ...item, quantity: q }]);
        }
    };
       
    //para modificar cantidad de objetos de carrito sin agregar de nuevo el mismo mas veces
    const removeItem = (id) => {
        setCart(
            cart.filter((el) => el.id !== id)
        )
    };

    //para vaciar el carrito
    const clear = () => {
        setCart([])
    };

    //obetener precio del carrito
    const getTotal = () => {
        return cart.reduce((acc, el) => acc + (el.price || 0) * (el.quantity || 0), 0);  //suma para el precio total con un failsafe por si no hay precio valido
    };

    //para exportar todo para enviarlo por el provider a todos
    const values = {
        cart,
        addItem, 
        removeItem,
        clear,
        getTotal
    };

    //para intentar mantener el carrito durante la sesion, localmente
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;