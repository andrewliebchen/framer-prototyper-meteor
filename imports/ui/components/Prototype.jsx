import React, { Component } from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import _ from "lodash";

import PageComponents from "./PageComponents.jsx";
import Loader from "./Loader.jsx";
import Editor from "./Editor.jsx";
import Preview from "./Preview.jsx";
import Modal from "./Modal.jsx";
import FormInput from "./FormInput.jsx";
import EditControls from "./EditControls.jsx";
import Settings from "./Settings.jsx";
import PrototypesList from "./PrototypesList.jsx";
import Snippets from "./Snippets.jsx";

import NotFoundPage from "../pages/NotFoundPage.jsx";

import "../styles/Prototype.css";

class Prototype extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      modal: false,
      updated: false,
      canEdit: false
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

  componentWillMount() {
    const { prototype } = this.props;
    this.setState({
      canEdit:
        !prototype.owner || (prototype && Meteor.userId() === prototype.owner)
    });
  }

  render() {
    const { prototype, loading } = this.props;
    const { canEdit } = this.state;
    const code = prototype ? prototype.code : "";

    if (loading) {
      return <Loader />;
    }

    if (_.isEmpty(prototype)) {
      return <NotFoundPage />;
    } else {
      return (
        <div>
          <PageComponents pageName={prototype.name || "New prototype"} />
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
                  full={!canEdit}
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
}

Prototype.propTypes = {
  prototype: PropTypes.object,
  prototypes: PropTypes.array,
  loading: PropTypes.bool,
  prototypeListLoaded: PropTypes.bool
};

export default Prototype;
