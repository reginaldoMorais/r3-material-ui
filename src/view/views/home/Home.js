import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React + Redux + Router</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/view/views/App.js</code> and save to reload.
        </p>
        <Link to="/contact">
          <RaisedButton label="Go to Contact" primary={true} />
        </Link>
        <p>
          <small>Reginaldo Morais</small>
        </p>
      </div>
    );
  }
}

export default Home;
