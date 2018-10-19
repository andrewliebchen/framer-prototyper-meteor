import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Redirect} from 'react-router-dom';

import Loader from '../components/Loader';

// Creates a new prototype, passes the new prototype id to state.
// Then, redirects to the new prototype from id in state.

class NewPrototypePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newId: null,
    };
  }

  componentDidMount() {
    Meteor.call(
      'newPrototype',
      {
        createdAt: Date.now(),
        owner: Meteor.userId(),
      },
      (err, id) => {
        if (id) {
          console.log(`New prototype id: ${id}`);
          return this.setState({newId: id});
        }
      },
    );
  }

  render() {
    if (this.state.newId) {
      return <Redirect to={`/${this.state.newId}`} />;
    } else {
      return <Loader />;
    }
  }
}

export default NewPrototypePage;
