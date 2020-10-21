import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './PizzaListItem.scss';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { IconButton } from '@material-ui/core/';

class PizzaListItem extends Component {
  addPizzaToCart = (event) => {
    console.log('add btn', event);
    console.log('PRODUCT', this.props.product);
    this.props.dispatch({ type: 'ADD_TO_CART', payload: this.props.product });
  };

  removePizza = () => {
    // console.log('in remove Pizza:', this.props.product);
    // axios delete call:
    axios
      .delete('/api/order/' + this.props.product.id)
      .then((response) => {
        // console.log('back from delete with', response);
        //add a get call
      })
      .catch((error) => {
        // console.log('error on delete:', error);
        alert('bad DELET call');
      }); //end axios
    this.props.dispatch({
      type: 'REMOVE_FROM_CART',
      payload: this.props.product,
    });
  }; //end removePizza

  render() {
    return (
      <div className="pizzaItem-container">
        <li>
          <main className="card">
            <img
              className="pizza-image"
              src={this.props.product.image_path}
              alt={this.props.product.description}
            />
            <section className="container">
              <h2>
                <span className="pizza-name">{this.props.product.name}</span>
                <br className="pizza-space"></br>

                <span className="pizza-price">${this.props.product.price}</span>
              </h2>
              <IconButton
                className="pizza-button"
                aria-controls="pizza-button"
                aria-label="add pizza"
                onClick={this.addPizzaToCart}
              >
                <AddCircleIcon />
              </IconButton>
              <IconButton
                className="pizza-button"
                aria-controls="pizza-button"
                aria-label="remove pizza"
                onClick={this.removePizza}
              >
                <RemoveCircleIcon />
              </IconButton>
            </section>
          </main>
        </li>
      </div>
    );
  }
}
const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});
export default connect(putReduxStateOnProps)(PizzaListItem);
