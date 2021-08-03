import { Route } from 'react-router-dom'
import Products from './products/products';
import Landing from './landing/landing';
import About from './about/about';
import Cart from './cart/cart';

const Routes = () => {

    return (
        <>
        <Route 
            exact={true} 
            path="/"
            render={() => <Landing />}
        />
        <Route 
            exact={true} 
            path="/products"
            render={() => <Products />}
        />
        <Route 
            exact={true} 
            path="/about"
            render={() => <About/>}
        />
        <Route 
            exact={true} 
            path="/cart"
            render={() => <Cart />}
        />
        </>
    )
}

export default Routes;