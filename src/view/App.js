import '../assets/styles/App.css';

import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionClose from 'material-ui/svg-icons/navigation/close';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFace from 'material-ui/svg-icons/action/face';

import Contact from './views/contact/Contact';
import Home from './views/home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: false };

    this.closeDrawer = this.closeDrawer.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  closeDrawer() {
    this.setState({ drawerOpen: false });
  }

  handleToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  render() {
    const pathname = this.props.match.url.split('/')[1];

    const Style = {
      appBar: {
        background: '#222',
        boxShadow: 'none',
      },
    };

    return (
      <div className="App">
        <AppBar
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleToggle}
          style={Style.appBar}
        />

        <div onClick={this.closeDrawer}>
          <Switch>
            <Route key="all" path="/contact" component={Contact} />
            <Route key="all" path="/" component={Home} />
          </Switch>
        </div>

        <div className="footer">
          <p>
            <small>Powered by create-react-app and material-ui</small>
          </p>
        </div>

        <Drawer open={this.state.drawerOpen} className="side-menu">
          <IconButton tooltip="SVG Icon" onClick={this.handleToggle}>
            <ActionClose />
          </IconButton>
          <Link to="/" className={pathname === '' ? 'active' : ''} onClick={this.closeDrawer}>
            <MenuItem leftIcon={<ActionHome />}>Go to Home</MenuItem>
          </Link>
          <Link to="/contact" className={pathname === 'contact' ? 'active' : ''} onClick={this.closeDrawer}>
            <MenuItem leftIcon={<ActionFace />}>Go to Contact</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default App;
