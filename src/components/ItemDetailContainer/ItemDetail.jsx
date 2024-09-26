import React from "react";
import Counter from "../Counter/Counter"
import "./styles.css";

const ItemDetail = ({item, onAdd}) => {
    return (
<article className="custom-container">
    <div className="custom-row">
        <div className="custom-col text-center">
            <img src={item.img} alt={item.name} className="img-fluid rounded img-limited" />
        </div>
        <div className="custom-col">
            <header className="custom-header">
                <h2 className="custom-text-center">{item.name} {item.model}</h2>
            </header>
            <section className="custom-section">
                <h5 className="text-muted custom-mb-2">Categoria: {item.category}</h5>
                <h5 className="custom-mt-3 custom-mb-2">Descripción</h5>
                <p className="custom-mb-5">{item.description}</p>
                <h4 className="text-primary">Precio: ${item.price}</h4>
            </section>

            {/* Pie de la tarjeta con el componente Counter para agregar cantidad al carrito*/}
            <footer className="custom-footer">
                <Counter onAdd={(q) => {
                    console.log("Agregar", q); //Loguear la cantidad agregada en la consola
                    onAdd(q); //Llamar la funcion onAdd con la cantidad seleccionada
                }} />
            </footer>
        </div>
    </div>
</article>

    )
}

export default ItemDetail;