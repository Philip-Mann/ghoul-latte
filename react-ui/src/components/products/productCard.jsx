import { Card, Button } from 'react-bootstrap';
// import { useState } from 'react'
import { useGetProductsQuery } from '../../redux/services/api';
import { productData } from '../../redux/reducers/fetchApiSlice';
import { useSelector } from 'react-redux';



const ProductCard = ({ searchInventory }) => {

    // const [noItems, setNoItems] = useState(false)

    const fetchData = useSelector(productData)
    const { data, isLoading } = useGetProductsQuery(fetchData);

    const productIncluded = () => {
        if(searchInventory === '') {
            return data?.inventory;
        } else {
            return data?.inventory.filter(product => product.item.toLowerCase().includes(searchInventory.toLowerCase()));
        }
    }

    console.log(productIncluded(searchInventory))

    return(
        <>
        <img alt="" src={productIncluded() < 1 ? 'https://media.giphy.com/media/XyAGm96eUIPsc/giphy.gif' : ''} />
        {isLoading ? <img src="../loader.gif" alt="loading gif" /> : 
        productIncluded().map(product =>
            <div className="img-container mt-3">
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
            </div>
        )}
        </>
    )
}

export default ProductCard;