import Container from 'react-bootstrap/Container'
// import ProductCard from '../../components/products/productCard';
import SearchProd from '../../components/products/searchProd';
// 

export default function Inventory() {
    // productIncluded()?.map(product =>
    return (
        <>
        <Container>
            <SearchProd />
            {/* <ProductCard /> */}
        </Container>
        </>
    );
}