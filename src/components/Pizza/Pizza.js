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
      <div className="Pizza-Background">
        {/* <header id="App-header">
          <h1 id="App-title">Pi</h1>
          <br></br> */}
        {/* <h3 id="total">
            Total: $
            {this.props.reduxState.addToCartReducer.reduce(function (
              acc,
              item
            ) {
              return acc + parseFloat(item.price);
            },
            0)} */}
        {/* </h3>
        </header> */}

        <PizzaList pizzas={this.state.pizzas} />
      </div>
    );
  }
}
// reduxState is awesome bc it allows you to pass props to through multiple components
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Pizza);
