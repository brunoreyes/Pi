import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge } from '@material-ui/core/';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import '../NavBar/NavBar.scss';

class CartBadge extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <Badge
          badgeContent={`$${this.props.reduxState.addToCartReducer.reduce(
            function (acc, item) {
              return acc + parseFloat(item.price);
            },
            0
          )}`}
          color="error"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <ShoppingBasketIcon />
        </Badge>
        {/* {JSON.stringify(this.state)} */}
      </>
    );
  }
}
// reduxState is awesome bc it allows you to pass props to through multiple components
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(CartBadge);
