import React, { Component } from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
// import queryString from "query-string";
import ReactTooltip from "react-tooltip";
import { Helmet } from "react-helmet";
import { withTracker } from "meteor/react-meteor-data";

import Editor from "./Editor.jsx";
import Preview from "./Preview.jsx";
import Modal from "./Modal.jsx";
import FormInput from "./FormInput.jsx";
import FormButton from "./FormButton.jsx";
import Controls from "./Controls.jsx";
import AccountsUIWrapper from "./AccountsUIWrapper.jsx";

import { Prototypes } from "../../api/prototypes";

import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: true,
      modal: false
    };
  }

  _renderModalContent() {
    switch (this.state.modal) {
      case "Settings":
        return (
          <div>
            <FormInput
              label="URL"
              value={window.location.href}
              copy={window.location.href}
              disabled
            />
            <AccountsUIWrapper />
          </div>
        );
      case "All":
        <div>All prototypes</div>;
      default:
        return <div />;
    }
  }

  render() {
    const code = this.props.prototype ? this.props.prototype.code : "";
    return (
      <Modal
        show={this.state.modal ? true : false}
        close={() => this.setState({ modal: false })}
        title={this.state.modal ? this.state.modal : null}
        content={this._renderModalContent()}
      >
        <Helmet>
          <title>Framer Prototyper</title>
        </Helmet>
        <ReactTooltip
          place="bottom"
          offset={{ bottom: 10 }}
          className="Tooltip"
        />
        <Flex className="App Underlay">
          <Box auto>
            <Preview code={code} {...this.state} />
          </Box>
          <Box auto>
            <Editor code={code} {...this.props} {...this.state} />
          </Box>
        </Flex>
        <Controls
          showAll={() => this.setState({ modal: "Account" })}
          showSettings={() => this.setState({ modal: "Settings" })}
          togglePlaying={() => this.setState({ playing: !this.state.playing })}
          {...this.state}
        />
      </Modal>
    );
  }
}

App.propTypes = {
  prototype: PropTypes.object,
  loading: PropTypes.bool
};

export default (PrototypeContainer = withTracker(() => {
  const prototypeHandle = Meteor.subscribe("prototype");
  const loading = !prototypeHandle.ready();

  return {
    loading,
    prototype: loading ? {} : Prototypes.findOne()
  };
})(App));

// export default App;
