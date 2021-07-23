import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Inventory() {

    const [inventory, setInventory] = useState(null);
    const [isLoading, setIsLoading] = useState(false);



    const fetchInventory = () => {
        setIsLoading(true);
        fetch('/api')
            .then(res => res.json())
            .then((inventory) => {
                setInventory(inventory);
                setIsLoading(false);
                console.log(inventory)
            });
    }

    useEffect(() => {
        fetchInventory();
    }, [])



    return (
        <>
            <div className="img-container mt-3">
                {isLoading ? <img src="../loader.gif" alt="loading gif" /> : 
                inventory?.inventory.map(product =>
                <div className="img-card">
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
        </>
    );
}