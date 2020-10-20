import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList';
import { Link } from 'react-router-dom';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Pizza.scss';
class Pizza extends Component {
  state = { pizzas: [] };

  componentDidMount() {
    this.getPizza();
  }

  getPizza = () => {
    console.log('in getPizza');
    axios
      .get('/api/pizza')
      .then((response) => {
        console.log(response.data);
        this.props.dispatch({ type: 'GET_PIZZA', payload: response.data });
        this.setState({ pizzas: response.data });
      })
      .catch((err) => {
        console.log('Problem getting Pizza!', err);
        alert('Try again later!');
      });
  };

  render() {
    return (
      <div className="Pizza_Background">
        <header className="App-header">
          <h1 className="App-title">Pi</h1>Bill Total: $
          {this.props.reduxState.addToCartReducer.reduce(function (acc, item) {
            return acc + parseFloat(item.price);
          }, 0)}
        </header>

        {/* <ul className="nav">
          <li>
            <Link to="/">Pizza</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul> */}

        {/* <img src="images/pizza_photo.png"/> */}
        {/* pizzaList which then maps through PizzaItems
                    When Pizza Item is clicked, takes you to cart.
                    */}
        <PizzaList pizzas={this.state.pizzas} />
      </div>
    );
  }
}
// reduxState is awesome bc it allows you to pass props to through multiple components
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Pizza);
