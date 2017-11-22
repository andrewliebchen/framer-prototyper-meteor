import React, { Component } from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
// import queryString from "query-string";
import ReactTooltip from "react-tooltip";
import { Helmet } from "react-helmet";
import { createContainer } from "meteor/react-meteor-data";

import Editor from "./components/Editor.jsx";
import Preview from "./components/Preview.jsx";
import Modal from "./components/Modal.jsx";
import FormInput from "./components/FormInput.jsx";
import FormButton from "./components/FormButton.jsx";
import Controls from "./components/Controls.jsx";

import { initialCode } from "./lib/config";

import { Prototypes } from "../api/prototypes";

import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: initialCode,
      playing: true,
      modal: false
    };
  }

  toggleSettings() {
    this.setState({ settings: !this.state.settings });
  }

  _renderModalContent() {
    switch (this.state.modal) {
      case "settings":
        return (
          <div>
            <FormInput
              label="URL"
              value={window.location.href}
              copy={window.location.href}
              disabled
            />
          </div>
        );
      default:
        return <div />;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this._updateURI();
    }
  }

  render() {
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
            <Preview {...this.state} />
          </Box>
          <Box auto>
            <Editor
              handleChange={newCode => this.setState({ code: newCode })}
              {...this.state}
            />
          </Box>
        </Flex>
        <Controls
          showSettings={() => this.setState({ modal: "settings" })}
          togglePlaying={() => this.setState({ playing: !this.state.playing })}
          {...this.state}
        />
      </Modal>
    );
  }
}

App.propTypes = {
  prototypes: PropTypes.object
};

export default createContainer(() => {
  return {
    prototypes: Prototypes.findOne()
  };
}, App);

// export default App;
