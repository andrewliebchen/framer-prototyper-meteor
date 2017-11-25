import React, { Component } from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
// import queryString from "query-string";
import ReactTooltip from "react-tooltip";
import { Helmet } from "react-helmet";
import { withTracker } from "meteor/react-meteor-data";
import Loading from "react-loading-animation";

import Editor from "./Editor.jsx";
import Preview from "./Preview.jsx";
import Modal from "./Modal.jsx";
import FormInput from "./FormInput.jsx";
import FormButton from "./FormButton.jsx";
import Controls from "./Controls.jsx";
import AccountsUIWrapper from "./AccountsUIWrapper.jsx";

import { Prototypes } from "../../api/prototypes";

import "../styles/Prototype.css";

class Prototype extends Component {
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
      case "Prototypes":
        <div>All prototypes</div>;
      default:
        return <div />;
    }
  }

  render() {
    const code = this.props.prototype ? this.props.prototype.code : "";
    if (this.props.loading) {
      return (
        <Loading
          width="80px"
          height="80px"
          strokeWidth="3"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate3d(-50%, -50%, 0)"
          }}
        />
      );
    }

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
          showAll={() => this.setState({ modal: "Prototypes" })}
          showSettings={() => this.setState({ modal: "Settings" })}
          togglePlaying={() => this.setState({ playing: !this.state.playing })}
          {...this.state}
        />
      </Modal>
    );
  }
}

Prototype.propTypes = {
  prototype: PropTypes.object,
  loading: PropTypes.bool
};

export default (PrototypeContainer = withTracker(({ id }) => {
  const prototypeHandle = Meteor.subscribe("prototype", id);
  const loading = !prototypeHandle.ready();

  return {
    loading,
    prototype: loading ? {} : Prototypes.findOne()
  };
})(Prototype));
