import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";

import Button from "./Button";

import "../styles/Accounts.css";

// This should maybe move up the the prototype layer
class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: Meteor.userId()
    };

    this._handleLogin = this._handleLogin.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
  }

  _handleLogin() {
    Meteor.loginWithGoogle(err => {
      if (!err) {
        this.setState({ isLoggedIn: true });
      }
    });
  }

  _handleLogout() {
    Meteor.logout(err => {
      if (!err) {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="Accounts">
        {Meteor.user() && (
          <p>
            You're signed in as <b>{Meteor.user().profile.name}</b>
          </p>
        )}
        <Button
          block
          onClick={isLoggedIn ? this._handleLogout : this._handleLogin}
        >
          {isLoggedIn ? "Sign out" : "Sign in with Google"}
        </Button>
      </div>
    );
  }
}

export default Accounts;
