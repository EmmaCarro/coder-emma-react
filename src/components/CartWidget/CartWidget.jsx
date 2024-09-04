import "../../App.css"

export const CartWidget = ({img}) => {
    return (
        <div className="cart-widget">
            <div className="Cart">
                {img}
            </div>
            <p alt="hardcodeado">3</p>
        </div>
    )
}

export default CartWidget;