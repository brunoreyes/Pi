import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link, Tabs, Tab } from 'react-router-dom';

import Pizza from '../Pizza/Pizza.js';
import Checkout from '../Checkout/Checkout.js';
// import Cart from '../Cart/Cart.js';
import CustomerForm from '../CustomerForm/CustomerForm';
import Admin from '../Admin/Admin';
import NavBar from '../NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router>
          <div>
            <Route exact path="/pizza" component={Pizza} />
            <Route exact path="/cart" component={CustomerForm} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/admin" component={Admin} />
          </div>
        </Router>
        <br />
        {/* <img src="images/pizza_photo.png" /> */}
      </div>
    );
  }
}

export default App;
