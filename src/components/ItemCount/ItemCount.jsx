import {useState} from "react";

const ItemCount = ({stock,initial,onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity +1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity -1)
        }
    }

    return (
        <div className="d-flex flex-column align-items-center my-4">
            <div className="d-flex align-items-center mb-3">
                <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
                <h4 className="mx-3 mb-0">{quantity}</h4>
                <button className="btn btn-outline-secondary" onClick={increment}>+</button>
            </div>
            <div className="w-100">
                <button className="btn btn-primary btn-block w-100" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;