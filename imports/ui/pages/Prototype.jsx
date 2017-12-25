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
import Settings from "../components/Settings.jsx";
import PrototypesList from "../components/PrototypesList.jsx";
import Snippets from "../components/Snippets.jsx";

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
  }

  _renderModalContent() {
    switch (this.state.modal) {
      case "Settings":
        return <Settings {...this.props} />;
      case "Prototypes":
        return (
          <PrototypesList
            showSettings={() => this.setState({ modal: "Settings" })}
            {...this.props}
          />
        );
      case "Snippets":
        return <Snippets prototype={this.props.prototype} />;
      default:
        return <div />;
    }
  }

  render() {
    const { prototype, loading } = this.props;
    const code = prototype ? prototype.code : "";
    const canEdit = prototype && Meteor.userId() === prototype.owner;

    return loading ? (
      <Loader />
    ) : (
      <div>
        <PageComponents prototypeName={prototype.name} />
        <Modal
          show={this.state.modal ? true : false}
          close={() => this.setState({ modal: false, updated: false })}
          title={this.state.modal ? this.state.modal : null}
          content={this._renderModalContent()}
          updated={this.state.updated}
        >
          <Flex className="App Underlay">
            <Box auto style={{ position: "relative" }}>
              <Preview
                full={false}
                togglePlaying={() =>
                  this.setState({ playing: !this.state.playing })}
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
                  showSnippets={() => this.setState({ modal: "Snippets" })}
                  togglePlaying={() =>
                    this.setState({
                      playing: !this.state.playing
                    })}
                  syntax={this.props.prototype.syntax}
                  {...this.state}
                />
              </Box>
            )}
          </Flex>
        </Modal>
      </div>
    );
  }
}

Prototype.propTypes = {
  prototype: PropTypes.object,
  prototypes: PropTypes.array,
  loading: PropTypes.bool
};

export default withTracker(({ id }) => {
  const prototypeHandle = Meteor.subscribe("prototypes", Meteor.userId());
  const loading = !prototypeHandle.ready();
  return {
    loading,
    prototype: loading ? {} : Prototypes.findOne(id),
    prototypes: loading
      ? []
      : Prototypes.find({}, { sort: { updatedAt: -1 } }).fetch()
  };
})(Prototype);
