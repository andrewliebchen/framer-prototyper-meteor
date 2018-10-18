import {Meteor} from 'meteor/meteor';
import Button from './Button';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import '../styles/Accounts.css';

// This should maybe move up the the prototype layer
class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: Meteor.userId(),
    };

    this._handleLogin = this._handleLogin.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
  }

  _handleLogin() {
    Meteor.loginWithGoogle(err => {
      if (!err) {
        this.setState({isLoggedIn: true});
      }
    });
  }

  _handleLogout() {
    Meteor.logout(err => {
      if (!err) {
        this.setState({isLoggedIn: false});
      }
    });
  }

  render() {
    const {isLoggedIn} = this.state;
    return (
      <div className="Accounts">
        {Meteor.user() && (
          <p>
            You're signed in as <b>{Meteor.user().profile.name}</b>
          </p>
        )}
        <Button
          block
          label={isLoggedIn ? 'Sign out' : 'Sign in with Google'}
          onClick={isLoggedIn ? this._handleLogout : this._handleLogin}
        />
      </div>
    );
  }
}

export default Accounts;
