import React, { Component } from 'react';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import { connect } from 'react-redux';
import './PizzaList.scss';
class PizzaList extends Component {
  render() {
    return (
      <div>
        <ul className="pizzaList-container">
          {this.props.reduxState.pizzaReducer.map((product, i) => {
            return <PizzaListItem key={i} product={product} />;
          })}
        </ul>
      </div>
    );
  }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(PizzaList);
