import React, { useState } from "react";
import Swal from "sweetalert2";
import "./styles.css";

const Form = ({ handleChange, submit, formData, error, cart, setError }) => {

    // Estado para controlar si esta cargando
    const [loading, setLoading] = useState(false);

    // Crea un mapeo de claves de las etiquetas
    const labels = {
        name: "nombre",
        email: "e-mail",
        phone: "teléfono",
    };

    // Funcion que maneja el envio del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado
        setLoading(true); // Empieza el estado con "cargando"

        // Objeto para validar los errores en el form
        const localError = {}; 

        // Verificar si el carrito tiene items
        if (cart.length === 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Carrito vacío',
                text: 'No hay artículos en el carrito.',
                confirmButtonText: 'Aceptar',
            });
            setLoading(false); // Deja de cargar si el carrito esta vacío
            return; // Salir si el carrito esta vacio
        }

        // Validacion de los campos del formulario
        // Validamos que los campos tengan algo escrito
        if (!formData.name) {
            localError.name = "Debe ingresar el nombre.";
        }
        if (!formData.email) {
            localError.email = "Debe ingresar el e-mail.";
        }
        if (!formData.phone) {
            localError.phone = "Debe ingresar el teléfono.";
        }

        // Validamos que los campos sean realmente validos con algunas reglas molestas
        // Nombre sin numeros
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!formData.name || !nameRegex.test(formData.name)) {
            localError.name = "El nombre no puede contener números ni caracteres especiales.";
        }

        // Email con una "@" y un "." después del "@"
        const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
        const atCount = (formData.email.match(/@/g) || []).length;
        if (!formData.email || !emailRegex.test(formData.email) || atCount !== 1) {
            localError.email = "El e-mail debe ser válido";
        }

        // Telefono (puede empezar con "+" pero solo numeros despues)
        const phoneRegex = /^\+?[0-9]+$/;
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            localError.phone = "El teléfono debe ser un número válido.";
        }

        // Si hay errores, detener el proceso
        if (Object.keys(localError).length > 0) {
            setError(localError); //poner los errores en el estado
            setLoading(false); //dejar de cargar
            return; //salir si hay errores
        }

        // Intentar enviar el formulario
        try {
            // Llama a la funcion de envio pasada como prop
            await submit(e); 

            // Alerta de que la orden se hizo bien
            Swal.fire({
                icon: 'success',
                title: 'Orden confirmada!',
                text: 'Su orden ha sido creada con éxito.',
                showConfirmButton: false,
                timer: 3000,
                position: 'bottom-end',
                toast: true,
            });

            // pero si la orden esta fea:
        } catch (err) {

            //Alerta de error de orden
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ha ocurrido un error al crear su orden. Inténtelo de nuevo.',
                showConfirmButton: false,
                timer: 3000,
                position: 'bottom-end',
                toast: true,
            });
        } finally {
            setLoading(false); //Siempre desactivar el estado de carga al final
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {
                //Iterar sobre los datos del formulario y generar un campo para cada key
                Object.keys(formData).map((key, i) => (
                    <div key={i} style={{ width: "100%" }}>

                        {/* Mostrar etiqueta */}
                        <label htmlFor={key}>Ingrese su {labels[key] || key}</label>

                        <input
                            type="text"
                            name={key}
                            id={key}
                            onChange={handleChange} //Manejar cambios en los campos del formulario
                            value={formData[key]} //Valor actual del campo
                        />

                        {/* Mostrar mensaje de error si existe */}
                        {error[key] && <span className="error-message">{error[key]}</span>}
                    </div>
                ))
            }

            <button className="btn btn-primary">

                {/* Cambiar el texto del botón según el estado de carga */}
                { loading ? "Creando orden..." : "Crear orden" }

            </button>
        </form>
    );
};

export default Form;