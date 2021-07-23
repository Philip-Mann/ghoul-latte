import React, { useEffect, useState } from 'react';

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
            <h1>Products</h1>
            <div className="img-card m-3">
                {isLoading ? <img src="../loader.gif" alt="loading gif" /> : 
                inventory?.inventory.map(product =>
                <> 
                <h3>{product.item}</h3>
                <img src={product.image} alt={product.item} />
                <p>{product.price}</p>
                <p>{product.description}</p>
                <button className="btn btn-dark">Add to Cart</button>
                </>
                )}
            </div>
        </>
    );
}