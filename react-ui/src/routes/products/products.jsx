import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

export default function Inventory() {

    const [inventory, setInventory] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [searchInventory, setSearchInventory] = useState('');

    const handleChange = evt => {
        evt.preventDefault();
        setSearchInventory(evt.target.value);
        console.log(searchInventory);
    }

    const filterProducts = () => {
        setIsLoading(true);
        fetch('/api')
            .then(res => res.json())
            .then((inventory) => {
                setInventory(inventory);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        filterProducts();
    }, [])

    const productIncluded = () => {
        if(searchInventory === '') {
            return inventory?.inventory;
        } else {
            return inventory?.inventory.filter(product => product.item.toLowerCase().includes(searchInventory.toLowerCase()));
        }
    }


    return (
        <>
        <Container>
            <div className="search-products mt-3 d-flex justify-content-center">
                <form >
                    <input
                        className="search"
                        onChange={handleChange}
                        placeholder="Search for products..."
                        value={searchInventory}
                    />
                </form>
            </div>
            <div className="img-container mt-3">

                {isLoading ? <img src="../loader.gif" alt="loading gif" /> : 
                productIncluded()?.map(product =>

                    <div className="img-card" key={product.id} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.image} alt={product.item} />
                        <Card.Body className="card-body" >
                            <Card.Title>{product.item}</Card.Title>
                            <Card.Title>${product.price}</Card.Title>
                            <Card.Text>{product.description}.</Card.Text>
                            <Button className="product-button" variant="dark">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </div>
                )}
            </div>
        </Container>
        </>
    );
}