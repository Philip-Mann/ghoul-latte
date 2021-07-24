import { Route, Switch } from 'react-router-dom';
import Landing from '../../routes/landing/landing'
import Products from '../../routes/products/products'
import Financing from '../../components/financing'
import Cart from '../../routes/cart/cart'

const Main = () => {
    return (
        <main>
            <Switch>
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
                    path="/financing"
                    render={() => <Financing />}
                />
                <Route 
                    exact={true} 
                    path="/cart"
                    render={() => <Cart />}
                />
            </Switch>
        </main>
    )
}

export default Main;