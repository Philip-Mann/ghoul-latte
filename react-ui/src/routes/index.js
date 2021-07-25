import { Route } from 'react-router-dom'

import Products from './products/products';
import Landing from './landing/landing';
import About from './about/about';
import Cart from './cart/cart';
import Admin from './admin/admin'
import Stock from './stock/stock';

import useToken from '../components/useToken'


const Routes = () => {

    const { token, setAdminToken } = useToken();

    if(!token) {
        return <Admin setAdminToken={setAdminToken} />
    } 


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
        <Route 
            exact={true} 
            path="/admin"
            render={() => <Admin />}
        />
        <Route 
            exact={true} 
            path="/stock"
            render={() => <Stock />}
        />
        </>
    )
}

export default Routes;