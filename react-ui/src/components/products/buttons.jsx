import DecrementBtn from "./buttons/DecrementBtn";
import AddToCart from "./buttons/addToCart";
import IncrementBtn from "./buttons/incrementBtn";

const Buttons = ({ product }) => {

    return (
        <div className="quantity-button-container">
            <DecrementBtn />
            <AddToCart product={product}/>
            <IncrementBtn />
        </div>
    )
}

export default Buttons;