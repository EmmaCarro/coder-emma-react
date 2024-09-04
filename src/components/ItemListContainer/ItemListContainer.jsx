import {useState, useEffect} from "react";
import {getProducts, getProductsByCategory} from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc (categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div className="album align-items-center justify-content-center">
            <h1 className="mb-5">{greeting}</h1>
            <div>
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer;