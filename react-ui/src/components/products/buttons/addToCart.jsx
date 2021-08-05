import { useDispatch } from 'react-redux';
import { updateCart } from '../../../redux/slice/cart';

const AddToCart = ({ product }) => {

    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(updateCart(product));
    }

    return (
        <button 
            className="btn btn-dark"
            onClick={() => handleChange() }
        >
        Add To Cart
        </button>
    )
}

export default AddToCart;