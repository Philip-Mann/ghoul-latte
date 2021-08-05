import { connect } from 'react-redux';

const CartItems = ({ cart }) => {

    return (
        <>
        {cart.cartItems.map(item => 
        <div className="product-card m-3" key={item.id}>
            <div className="product-image">
                <img src={item.image} alt={item.description} />    
            </div>
            <div className="product-info">
                    <p>{item.item}</p>
                    <p>${item.price}</p>
            </div>
        </div>
        )}
        </>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(CartItems);