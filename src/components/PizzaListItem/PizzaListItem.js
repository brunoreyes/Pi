import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './PizzaListItem.scss';

class PizzaListItem extends Component {
  addPizzaToCart = (event) => {
    console.log('add btn', event);
    console.log('PRODUCT', this.props.product);
    // TODO: Dispatch here
    //this will add the price of pizza to a count to be displayed on
    //  '/', '/cart', and '/checkout'
    this.props.dispatch({ type: 'ADD_TO_CART', payload: this.props.product });
  };

  removePizza = () => {
    console.log('in remove Pizza:', this.props.product);
    // axios delete call:
    axios
      .delete('/api/order/' + this.props.product.id)
      .then((response) => {
        console.log('back from delete with', response);
        //add a get call
      })
      .catch((error) => {
        console.log('error on delete:', error);
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
              src={this.props.product.image_path}
              alt={this.props.product.description}
            />
            <section className="container">
              <h2>
                <span className="pizza-name">{this.props.product.name}</span>
                <br></br> ${this.props.product.price}
              </h2>
              <p>{this.props.product.description}</p>
              <button onClick={this.addPizzaToCart}>Add to Cart</button>
              <button onClick={this.removePizza}>Remove From Cart</button>
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
