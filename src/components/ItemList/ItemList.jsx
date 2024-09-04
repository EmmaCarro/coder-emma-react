import Item from "../Item/Item";

const ItemList = ({products}) => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;