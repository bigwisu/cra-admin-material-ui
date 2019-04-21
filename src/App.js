import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';
import { mainListItems, adminListItems } from './components/Nav/ListItems';
import Users from './containers/Users/Users.container';
import Starwars from './containers/Starwars/Starwars.container';
import Gifs from './containers/Gifs/Gifs.container';
import Dashboard from './containers/Dashboard/Dashboard.container';

import styles from './App.style';
import store from './redux/store';

class App extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="absolute"
              className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
            >
              <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(
                    classes.menuButton,
                    this.state.open && classes.menuButtonHidden,
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Header {...this.props}/>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
              }}
              open={this.state.open}
            >
              <div className={classes.toolbarIcon}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>{mainListItems}</List>
              <Divider />
              <List>{adminListItems}</List>
            </Drawer>
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <React.Fragment>
                <Route 
                  exact path="/" 
                  component= {Dashboard} // render={(props) => <Dashboard {...props} />}
                />
                <Route exact path="/users" component={Users} />
                <Route exact path="/starwars" component={Starwars} />
                <Route exact path="/gifs" component={Gifs} />
              </React.Fragment>
            </main>
          </div>
        </BrowserRouter>
    </Provider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
