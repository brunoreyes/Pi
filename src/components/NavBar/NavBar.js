import React from 'react'; // { useState, useEffect, useReducer }
import {
  AppBar,
  Typography,
  IconButton,
  Toolbar,
  // Badge,
} from '@material-ui/core/';
// import axios from 'axios';
import { connect } from 'react-redux';
// import ImageFeed from '../../pages/ImageFeed/ImageFeed'; //page one
// import UploadPage from '../../pages/UploadPage/UploadPage'; // page two
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import CustomerForm from '../CustomerForm/CustomerForm.js';
import Pizza from '../Pizza/Pizza.js';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import CartBadge from './../CartBadge/CartBadge.js';
import './NavBar.scss';

function ProjectTabs() {
  const allTabs = ['/', '/cart'];
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Route
            path="/"
            render={({ location }) => (
              <div>
                <AppBar position="static">
                  <Toolbar>
                    <Typography variant="h1" noWrap id="app-title">
                      Pi
                      {/* {JSON.stringify(quantity)} */}
                    </Typography>
                    <div id="icon-container">
                      <IconButton
                        aria-controls="menu-appbar"
                        aria-label="Pizza Menu"
                        id="pizza-menu-icon-button"
                        value="/Pizza"
                        component={Link}
                        to={allTabs[0]}
                      >
                        <LocalPizzaIcon />
                      </IconButton>
                      <IconButton
                        aria-controls="menu-appbar"
                        aria-label="Checkout"
                        id="checkout-icon-button"
                        to={allTabs[1]}
                        component={Link}
                        value="/CustomerForm"
                      >
                        <CartBadge />
                      </IconButton>
                    </div>
                  </Toolbar>
                </AppBar>
                <Switch>
                  <Route exact path={allTabs[0]} render={() => <Pizza />} />
                  <Route path={allTabs[1]} render={() => <CustomerForm />} />
                </Switch>
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    </>
  );
}
// export default ProjectTabs;
// reduxState is awesome bc it allows you to pass props to through multiple components
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(ProjectTabs);
// const putReduxStateOnProps = (reduxState) => ({ reduxState });
// export default connect(putReduxStateOnProps)(withStyles(styles)(ProjectTabs));
