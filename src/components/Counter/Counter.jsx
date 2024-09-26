import React, {useState} from "react";
import "./styles.css";

// un contador con botones para sumar, restar y agregar al carrito ese numero
const Counter = ({ onAdd, text = "Agregar al carrito", q = 1 }) => {

    // Estado 'count' que almacena la cantidad actual
    const [count, setCount] = useState(q);

    // Funcion "increment" para aumentar el contador en 1
    const increment = () => {
        setCount(count + 1);
    };

    // Funcion 'decrement' para disminuir el contador en 1, pero no permite que sea menor a 1
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="counter-container">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <button className="add-to-cart" onClick={() => onAdd(Math.max(1, count))}>
                {text}
            </button>
        </div>
    );
};

export default Counter;