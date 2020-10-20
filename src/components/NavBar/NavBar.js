import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Button } from '@material-ui/core/';
import { connect } from 'react-redux';
// import ImageFeed from '../../pages/ImageFeed/ImageFeed'; //page one
// import UploadPage from '../../pages/UploadPage/UploadPage'; // page two
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import CustomerForm from '../CustomerForm/CustomerForm.js';
import Pizza from '../Pizza/Pizza.js';
function ProjectTabs() {
  const allTabs = ['/', '/cart'];
  const styles = {
    AppBar: {
      background: '#111',
      boxShadow: 'none',
    },
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
                  <Tabs
                    value={location.pathname}
                    TabIndicatorProps={{ style: { background: 'black' } }}
                    variant="fullWidth"
                  >
                    <Tab
                      label="Pizza Menu"
                      value="/Pizza"
                      component={Link}
                      to={allTabs[0]}
                    />
                    <Tab
                      label="Cart"
                      value="/CustomerForm"
                      component={Link}
                      to={allTabs[1]}
                    />
                  </Tabs>
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
