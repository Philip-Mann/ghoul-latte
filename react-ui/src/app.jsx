import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Products from './components/products';
import Financing from './components/financing';
// import About from './components/about';
import Footer from './components/footer';
import Landing from './components/landing'
import Cart from './components/cart';

import { 
  BrowserRouter as Router,
  // Link,
  Route,
  Switch,
  // Redirect
 } from 'react-router-dom';



function App() {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/financing">
            <Financing />
          </Route>
          <Route path="/cart">
            <Cart />  
            {/* <About /> */}
          </Route>
        </Switch>
      </Router>
      <Landing />
      <Footer />
    </div>
  );
}

export default App;