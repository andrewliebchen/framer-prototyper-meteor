import React, { Component } from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import ReactTooltip from "react-tooltip";
import { Helmet } from "react-helmet";
import { withTracker } from "meteor/react-meteor-data";

import PageComponents from "../components/PageComponents.jsx";
import Loader from "../components/Loader.jsx";
import Editor from "../components/Editor.jsx";
import Preview from "../components/Preview.jsx";
import Modal from "../components/Modal.jsx";
import FormInput from "../components/FormInput.jsx";
import EditControls from "../components/EditControls.jsx";
import AccountsUIWrapper from "../components/AccountsUIWrapper.jsx";

import { Prototypes } from "../../api/prototypes";

import "../styles/Prototype.css";

class Prototype extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      modal: false,
      updated: false
    };
    this._updateStatusBadge = this._updateStatusBadge.bind(this);
    this._handlePlayToggle = this._handlePlayToggle.bind(this);
  }

  _renderModalContent() {
    switch (this.state.modal) {
      case "Settings":
        return (
          <div>
            <FormInput
              label="Prototype name"
              defaultValue={this.props.prototype.name}
              placeholder="Make it snappy"
              onChange={event =>
                Meteor.call(
                  "updateName",
                  {
                    id: this.props.prototype._id,
                    name: event.target.value
                  },
                  (err, success) => this._updateStatusBadge()
                )}
            />
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

  _handlePlayToggle() {
    this.setState({ playing: !this.state.playing });
  }

  _updateStatusBadge() {
    this.setState({ updated: true });
    setTimeout(() => this.setState({ updated: false }), 3000);
  }

  render() {
    const { prototype, loading } = this.props;
    const code = prototype ? prototype.code : "";
    const canEdit = prototype && Meteor.userId() === prototype.owner;

    return loading ? (
      <Loader />
    ) : (
      <Modal
        show={this.state.modal ? true : false}
        close={() => this.setState({ modal: false, updated: false })}
        title={this.state.modal ? this.state.modal : null}
        content={this._renderModalContent()}
        updated={this.state.updated}
      >
        <PageComponents />
        <Flex className="App Underlay">
          <Box auto style={{ position: "relative" }}>
            <Preview
              full={false}
              togglePlaying={this._handlePlayToggle}
              {...this.state}
              {...this.props}
            />
          </Box>
          {canEdit && (
            <Box w={1 / 2} style={{ position: "relative" }}>
              <Editor code={code} {...this.props} {...this.state} />
              <EditControls
                showAll={() => this.setState({ modal: "Prototypes" })}
                showSettings={() => this.setState({ modal: "Settings" })}
                togglePlaying={this._handlePlayToggle}
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
  loading: PropTypes.bool
};

export default withTracker(({ id }) => {
  const prototypeHandle = Meteor.subscribe("prototype", id);
  const loading = !prototypeHandle.ready();

  return {
    loading,
    prototype: loading ? {} : Prototypes.findOne()
  };
})(Prototype);
