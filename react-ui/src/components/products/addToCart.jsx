// import { useSelector, useDispatch } from 'react-redux';
// import { incrementCart, decrementCart } from "../../redux/slices/quantitySlice";


const AddToCart = () => {

    // const number = useSelector((state)=> state.counter.number);
    // const dispatch = useDispatch();

    // const handleIncrementClick = () => {
    //     // console.log("Hello World")
    //     console.log(incrementCart());
    //     dispatch(incrementCart());
    // }

    // const handleDecrementClick = () => {
    //     // console.log("Hello World")
    //     console.log(decrementCart());
    //     dispatch(decrementCart());
    // }

    return (
        <div className="quantity-button-container">
            <button className="btn btn-dark">-</button>
            <button className="btn btn-dark">Add To Cart</button>
            <button className="btn btn-dark">+</button>
        </div>
    )
}

export default AddToCart;