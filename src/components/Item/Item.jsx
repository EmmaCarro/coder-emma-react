import {Link} from "react-router-dom";

const Item = ({id, name, img, description, price, stock}) => {
    return (
        <div className="col col-sm-4">
            <div className="card shadow-sm m-1">
                <div className="card-header m-0 p-0">
                    <img src={img} alt={name} className="card-img-top rounded" />
                </div>
                <div className="card-body">
                    <h3 className="card-title d-flex card-title text-wrap mb-3 fs-3">{name}</h3>
                    <h4 className="d-flex card-subtitle text-muted mb-1"> ${price}-</h4>
                    <h4 className="d-flex card-subtitle text-muted">Stock: {stock}</h4>
                </div>
                <div className="card-text-length d-flex card-body py-0 my-1">
                    <p className="card-text text-start">{description}</p>
                </div>
                <div className="d-flex justify-content-end m-3">
                    <Link to={`/item/${id}`} className="btn btn-md btn-primary">Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item;