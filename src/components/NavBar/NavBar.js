import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  // Tabs,
  // Tab,
  Typography,
  // Button,
  IconButton,
  Toolbar,
  Badge,
} from '@material-ui/core/';
import { connect } from 'react-redux';
// import ImageFeed from '../../pages/ImageFeed/ImageFeed'; //page one
// import UploadPage from '../../pages/UploadPage/UploadPage'; // page two
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import CustomerForm from '../CustomerForm/CustomerForm.js';
import Pizza from '../Pizza/Pizza.js';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './NavBar.scss';
function ProjectTabs() {
  const allTabs = ['/', '/cart'];
  const styles = {
    //   AppBar: {
    //     // background: '#0c0101',
    //     boxShadow: 'none',
    //   },
  };
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Route
            path="/"
            render={({ location }) => (
              <div>
                <AppBar style={styles.AppBar} position="static">
                  <Toolbar>
                    <Typography
                      // className={classes.title}
                      variant="h1"
                      noWrap
                      id="app-title"
                    >
                      Pi
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
                        value="/CustomerForm"
                        component={Link}
                        to={allTabs[1]}
                      >
                        <Badge
                          badgeContent={17}
                          // color="black"
                          color="error"
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                        >
                          <ShoppingBasketIcon />
                        </Badge>
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
export default ProjectTabs;
// const putReduxStateOnProps = (reduxState) => ({ reduxState });
// export default connect(putReduxStateOnProps)(withStyles(styles)(ProjectTabs));
