import { Switch } from 'react-router-dom';
import Routes from '../../routes/index'

// import Landing from '../../routes/landing/landing'
// import Products from '../../routes/products/products'
// import About from '../../routes/about/about'
// import Cart from '../../routes/cart/cart'

const Main = () => {
    return (
        <main>
            <Switch>
                <Routes />
            </Switch>
        </main>
    )
}

export default Main;