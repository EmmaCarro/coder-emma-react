import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id,name,img,category,description,price,stock}) => {
    return (
        <article className="container my-5">
            <div className="row">
                <div className="col-md-6 text-center">
                    <img src={img} alt={name} className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <header className="mb-4">
                        <h2 className="text-center">{name}</h2>
                    </header>
                    <section className="mb-4">
                        <h5 className="text-muted mb-2">Categoria: {category}</h5>
                        <h5 className="mt-3 mb-2">Descripción</h5>
                        <p className="mb-5">{description}</p>
                        <h4 className="text-primary">Precio: ${price}</h4>
                    </section>
                    <footer className="mt-4">
                        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
                    </footer>
                </div>
            </div>
        </article>
    )
}

export default ItemDetail;