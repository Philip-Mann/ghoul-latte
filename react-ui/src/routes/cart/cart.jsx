import React from 'react';
import Container from 'react-bootstrap/Container'
import CartItems from '../../components/cart/cartItems';
import Data from '../../components/cart/data'

export default function Cart() {
    
    return (
        <>
        <Container>
            <div className="cart-body">
                <Data />
                <CartItems />
            </div>
        </Container>
        </>
    )
}