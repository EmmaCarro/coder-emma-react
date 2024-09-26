import React from "react";
import Item from "./Item";
import "./styles.css";

const ItemList = ({ items }) => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
            {items.map((el) => (
                <Item key={el.id} item={el} /> //Mapea sobre el array de items y renderiza un componente Item para cada uno
            ))}
        </div>
    )
}

export default ItemList;