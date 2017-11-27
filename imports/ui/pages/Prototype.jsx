import React, { Component } from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import ReactTooltip from "react-tooltip";
import { Helmet } from "react-helmet";
import { withTracker } from "meteor/react-meteor-data";

import Loader from "../components/Loader.jsx";
import Editor from "../components/Editor.jsx";
import Preview from "../components/Preview.jsx";
import Modal from "../components/Modal.jsx";
import FormInput from "../components/FormInput.jsx";
import FormButton from "../components/FormButton.jsx";
import EditControls from "../components/EditControls.jsx";
import PreviewControls from "../components/PreviewControls.jsx";
import AccountsUIWrapper from "../components/AccountsUIWrapper.jsx";

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
    const { prototype, loading, fullScreen } = this.props;
    const code = prototype ? prototype.code : "";
    const canEdit = prototype && Meteor.userId() === prototype.owner;

    return loading ? (
      <Loader />
    ) : (
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
          <Box auto style={{ position: "relative" }}>
            <Preview
              code={code}
              fullScreen={!canEdit || fullScreen}
              {...this.state}
            />
            <PreviewControls />
          </Box>
          {canEdit && (
            <Box w={1 / 2} style={{ position: "relative" }}>
              <Editor code={code} {...this.props} {...this.state} />
              <EditControls
                showAll={() => this.setState({ modal: "Prototypes" })}
                showSettings={() => this.setState({ modal: "Settings" })}
                togglePlaying={() =>
                  this.setState({ playing: !this.state.playing })}
                {...this.state}
              />
            </Box>
          )}
        </Flex>
      </Modal>
    );
  }
}

Prototype.propTypes = {
  prototype: PropTypes.object,
  loading: PropTypes.bool,
  fullScreen: PropTypes.bool
};

export default withTracker(({ id }) => {
  const prototypeHandle = Meteor.subscribe("prototype", id);
  const loading = !prototypeHandle.ready();

  return {
    loading,
    prototype: loading ? {} : Prototypes.findOne()
  };
})(Prototype);
