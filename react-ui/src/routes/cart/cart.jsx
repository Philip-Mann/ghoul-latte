import React from 'react';
import Container from 'react-bootstrap/Container'
import Data from '../../components/cart/data'

export default function Cart() {
    
    return (
        <>
        <Container>
            <h1>Cart</h1>
            <Data />
        </Container>
        </>
    )
}