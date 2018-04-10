import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import RaisedButton from 'material-ui/RaisedButton';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contact</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/view/views/Contact.js</code> and save to reload.
        </p>
        <Link to="/">
          <RaisedButton label="Go to Home" primary={true} />
        </Link>
        <p>
          <small>Reginaldo Morais</small>
        </p>
      </div>
    );
  }
}

export default Contact;
