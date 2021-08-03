import { useGetProductsQuery } from '../../redux/services/api';
import { productData } from '../../redux/reducers/fetchApiSlice';
import { useSelector } from 'react-redux';
import AddToCart from './addToCart'




const ProductCard = ({ searchInventory }) => {
    const fetchData = useSelector(productData)
    const { data, isLoading } = useGetProductsQuery(fetchData);
    
    const productIncluded = () => {
        if(searchInventory === '') {
            return data?.inventory;
        } else {
            return data?.inventory.filter(product => product.item.toLowerCase().includes(searchInventory.toLowerCase()));
        }
    }

    return(
        <>
        <div className="product-container mt-3">
        {productIncluded() < 1 ? <h2 className="text-center mt-3">Sorry, we dont have "{searchInventory}" here. (❍ᴥ❍ʋ)</h2> : ''}
        {isLoading ? <img src="../loader.gif" alt="loading gif" /> : 
        productIncluded().map(product =>
                <div className="product-card m-3" key={product.id}>
                    <div className="product-image">
                        <img src={product.image} alt={product.image} />
                    </div>
                    <div className="product-info">
                        <p>{product.item}</p>
                        <p>${product.price}</p>
                    </div>
                    <AddToCart /> 
                </div>
        )}
        </div>
        </>
    )
}

export default ProductCard;