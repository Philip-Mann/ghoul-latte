import { useState } from "react";
import ProductCard from '../products/productCard'

const SearchProds = () => {

    const [searchInventory, setSearchInventory] = useState('');

    const handleChange = evt => {
        evt.preventDefault();
        setSearchInventory(evt.target.value);
    }

    return (
        <>
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
            <ProductCard searchInventory={searchInventory}/>
        </>
    )
}

export default SearchProds;