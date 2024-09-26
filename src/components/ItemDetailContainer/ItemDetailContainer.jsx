import React, {useContext, useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import CartContext from "../../context/CartContext/CartContext";
import "./styles.css";

const ItemDetailContainer = () => {

    // Estado local para guardar el item
    const [item, setItem] = useState({})

    // Obtener el parametro "id"
    const {id} = useParams()

    // Obtener la funcion addItem del contexto del carrito
    const {addItem} = useContext(CartContext)

    useEffect(() => {

        // Inicio firestore
        const db = getFirestore();

        // Chequeo si se define el id
        if (id) {  
            const docRef = doc(db, "items", id); // Busco la coleccion "items"
            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        setItem({ id: snapshot.id, ...snapshot.data() }); // Guardar el item en el estado
                    } else {
                        console.error("No existe el documento");  //error si no existe el documento
                    }
                })
                .catch((error) => {
                    console.error("Error de fetch del documento", error);  //otro error si la conexion se hace caca
                });
        }
    }, [id]); //El efecto se ejecuta cuando cambia el id

    // Funcion que se ejecuta cuando se agrega un item al carrito
    const onAdd = (q) => {

        // Verifica que el item exista y tenga un id
        if (item && item.id) {  
            addItem(item, q); // Agregar el item al carrito con la cantidad seleccionada
        } else {
            console.error("No existe el item o el item id!"); //habria que cambiar todos estos errores por sweetalert para el usuario peeeeero no llego a tiempo para meter un stock limitado en el que puede haber cero items y dar error
        }
    }

    return (
        <div className="item-detail-container">
            {
                <ItemDetail item={item} onAdd={onAdd} />
            }
        </div>
    )
}

export default ItemDetailContainer;