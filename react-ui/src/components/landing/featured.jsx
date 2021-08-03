import { useGetProductsQuery } from '../../redux/services/api';
import { productData } from '../../redux/reducers/fetchApiSlice';
import { useSelector } from 'react-redux';

const Featured = () => {

    const fetchData = useSelector(productData)
    const { data, isLoading } = useGetProductsQuery(fetchData);

    // const showCase = () => {
    //     const featured = data?.inventory[Math.floor(Math.random() * data?.inventory.length)];
    //     return showCase();
    // }
    
    return (
        <>
        {isLoading ? <p>Loading...</p> : 
        data?.inventory.map(product => 
        <img src={product.image} alt="" />    
        )
        }
        </>
    )
}

export default Featured;