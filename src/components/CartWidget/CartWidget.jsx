import "../../App.css"

export const CartWidget = ({img}) => {
    return (
        <div className="cart-widget">
            <img className="Cart" src={img} alt="imagen-carrito" />
            <p alt="hardcodeado">3</p>
        </div>
    )
}

export default CartWidget;