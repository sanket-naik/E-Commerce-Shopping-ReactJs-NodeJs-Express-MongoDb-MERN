import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Default from './components/Default'
import Details from './components/Details'
import ProductList from './components/Product.list'
import About from './components/About'
import AddProduct from './components/AddProduct'
import Login from './components/Login'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details/:id" component={Details}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/add" component={AddProduct}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/login" component={Login}/>
        <Route component={Default}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
