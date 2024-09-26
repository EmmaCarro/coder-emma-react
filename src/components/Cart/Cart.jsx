import React, { useState, useContext } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import CartContext from "../../context/CartContext/CartContext";
import Form from "../Form/Form";
import "./styles.css";
import "../ItemListContainer/styles.css"; //para cargar el css de las cards
import Swal from "sweetalert2";

const CartDetail = () => {

    // Almacenar el ID de la orden
    const [orderId, setOrderId] = useState(""); 

    // Obtener el carrito, eliminar items y el total del carrito
    const { cart, removeItem, getTotal } = useContext(CartContext); 

    // Controlar si se esta mostrando el "loading" (cargando)
    const [loading, setLoading] = useState(false);  

    // Almacenar los datos del comprador
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: ""
    });

    // Almacenar los errores del formulario
    const [error, setError] = useState({
        name: "",
        email: "", 
        phone: ""
    });

    // Manejar los cambios en los inputs del formulario y actualizar el estado del comprador
    const handleChange = (e) => {
        setBuyer({
            ...buyer, //Copia el estado anterior del comprador
            [e.target.name]: e.target.value //Actualiza el campo especifico (nombre o email)
        });
    };

    // Funcion para el envio del formulario
    const submit = (e) => {
        e.preventDefault(); // Parar el comportamiento predeterminado
        setLoading(true); // Empieza el loading

        // Objeto para almacenar los errores locales para la validacion de errores
        const localError = {}; 
        
        // Si no hay errores, se procede a agregar la orden
        if (Object.keys(localError).length === 0) {
            addOrder();
        } else {
            setError(localError); //Si hay errores los muestra
        }

        setLoading(false); //Termina el loading
    };

    // Funcion para agregar la orden de compra a Firebase
    const addOrder = () => {
        setLoading(true);  //LOADING para dar un poco de feedback al user mediante un "loading"

        // Crea el objeto de compra que incluye al comprador, los items del carrito, el total y la fecha del momento
        const purchase = {
            buyer,
            items: cart,
            total: getTotal(),
            date: new Date()
        };

        //Se inicia firestore
        const db = getFirestore();

        // Referencia para la coleccion "orders" (las ordenes de compra) dentro de firebase
        const orderCollection = collection(db, "orders"); 

        // Agregar el documento a las "orders" de Firestore
        addDoc(orderCollection, purchase)

            // Si sale bien
            .then((res) => {
                setOrderId(res.id); //Guarda el id de la orden

                // Muestra un mensaje exitoso de sweetalert
                Swal.fire({
                    icon: 'success',
                    title: 'Gracias por su compra!',
                    text: `Orden de compra: ${res.id}`,
                    confirmButtonText: 'Aceptar',
                });
                console.log(res.id);  //innecesario pero se registra el guardado en la consola por si acaso, viste
                setLoading(false); //LOADING se detiene cuando se crea la orden
            })

            // Si la orden no pasa bien
            .catch((error) => {

                //Sweetalert que nos da el error
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrio un error en el pedido de compra',
                    confirmButtonText: 'Aceptar',
                });
                console.log(error); //Se registra el error en la consola
                setLoading(false);  //LOADING se detiene con los errores
            });
    };

    // Funcion para calcular el precio total del carrito sumando los precios de cada item multiplicados por la cantidad
    const calculateTotalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    // Funcion para eliminar un ítem del carrito y mostrar una alerta SweetAlert
    const handleDelete = (id) => {

        // Elimina el item del carrito
        removeItem(id); 

        // Muestra una notificación SweetAlert de que el ítem fue eliminado
        Swal.fire({
            icon: 'success',
            title: 'El producto ha sido eliminado.',
            showConfirmButton: false,
            timer: 3000,
            position: 'bottom-end', // Position of the notification
            toast: true, // Enable toast mode
        });
    };

    return (
        <div className="px-5">
            <h2 className="cart-title">Tu carrito</h2>
            <div className="album align-items-center justify-content-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
                    {cart.map((el) => (
                        <div key={el.id} className="card-container col col-sm-4">
                            <div className="card shadow-sm m-1">
                                <div className="card-header m-0 p-0">
                                    <img src={el.img} alt={el.name} className="card-img-top rounded" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title d-flex card-title text-wrap mb-3 fs-3">{el.name}</h3>
                                    <h4 className="d-flex card-subtitle text-muted mb-1"> ${el.price}-</h4>
                                    <h4 className="d-flex card-subtitle text-muted">Cantidad: {el.quantity}</h4>
                                </div>
                                <div className="card-text-length d-flex card-body py-0 my-1">
                                    <p className="card-text text-start">{el.description}</p>
                                </div>
                                <div className="d-flex justify-content-end m-3">
                                    <button
                                        onClick={() => handleDelete(el.id)}
                                        className="cart-button"
                                        >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h3 className="total text-success my-3 fw-bold">Precio Total: ${calculateTotalPrice().toFixed(2)}</h3>
            <Form
                handleChange={handleChange} //maneja los cambios en los inputs del form
                submit={submit}  //maneja el envio del form
                formData={buyer}  //datos del comprador
                error={error}  //errores del form
                cart={cart} //pasa los items del carrito al form
                setError={setError} //funcion que actualiza los errores
            />
        </div>
    );
};

export default CartDetail;