import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import "./styles.css";
import {useParams} from "react-router-dom";
import { getDocs, collection, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    
    // Inicializa el estado para almacenar productos en un array
    const [products, setProducts] = useState([])  

    // Obtengo el categoryId para los params
    const {categoryId} = useParams()

    useEffect(() => {

        //inicio firestore
        const db = getFirestore()

        //busco en la coleccion "items" del firestore
        const itemCollection = collection(db, "items")

        // Con esto filtro por categorias y genero la consulta de categoria
        const itemQuery = categoryId
            ? query(itemCollection, where("category", "==", categoryId))
            : itemCollection;
    
        // Obtengo los documentos de la consulta anterior
        getDocs(itemQuery)

            // Si todo sale bien
            .then((snapshot) => {

                // Mapeo los documentos y los convierto en un array de items
                const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProducts(items); // Actualiza el estado con los items obtenidos
            })
            .catch((error) => console.error("Error al fetchear items:", error));
    }, [categoryId]); // Ejecuta el efecto cuando categoryId cambia

    return (
        <div className="album align-items-center justify-content-center px-5">
            <ItemList items={products} />
        </div>
    )
}

export default ItemListContainer;