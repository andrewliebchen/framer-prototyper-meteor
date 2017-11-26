import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

// Creates a new prototype, passes the new prototype id to state.
// Then, redirects to the new prototype from id in state.

class NewPrototypePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newId: null
    };
  }

  render() {
    Meteor.call(
      "newPrototype",
      {
        createdAt: Date.now(),
        owner: Meteor.userId()
      },
      (err, id) => {
        if (id) {
          return this.setState({ newId: id });
        }
      }
    );

    if (this.state.newId) {
      return <Redirect to={`/${this.state.newId}`} />;
    } else {
      return null;
    }
  }
}

export default NewPrototypePage;
