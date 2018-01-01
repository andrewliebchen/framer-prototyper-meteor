import React, { Component } from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import _ from "lodash";
import queryString from "query-string";
import { toast } from "react-toastify";

import PageComponents from "./PageComponents.jsx";
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

    // Can this be better?
    const isOwner = Meteor.userId() === this.props.prototype.owner;
    this.state = {
      canEdit: Meteor.isDesktop || isOwner || !this.props.prototype.owner,
      isDesktop: Meteor.isDesktop,
      isLoggedIn: Meteor.userId() ? true : false,
      isOwner: isOwner,
      modal: false,
      playing: true
    };
  }

  _renderModalContent() {
    switch (this.state.modal) {
      case "Settings":
        return <Settings {...this.props} {...this.state} />;
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

  _handleLogOut() {
    Meteor.logout(error => {
      if (error) {
        toast("Whoops, couldn't log you out...", { type: "error" });
      } else {
        this.setState({ isLoggedIn: false });
        toast("See you later!");
      }
    });
  }

  _handleLogIn() {
    Meteor.loginWithGoogle(error => {
      if (error) {
        toast("Whoops, couldn't log you in...", { type: "error" });
      } else {
        this.setState({ isLoggedIn: true });
        toast("Great to see you!");
      }
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { loading, prototype } = this.props;
  //   if (prevProps != this.props) {
  //     const isOwner = Meteor.userId() === prototype.owner;
  //     this.setState({
  //       canEdit: Meteor.isDesktop || isOwner || !prototype.owner,
  //       isOwner: isOwner || Meteor.isDesktop
  //     });
  //   }
  // }

  componentDidMount() {
    const action = queryString.parse(location.search).action;
    switch (action) {
      case "fork":
        toast("Sweet, this is a forked prototype...");
        break;
      case "new":
        toast("Cowabunga, new prototype created!");
        break;
    }
  }

  render() {
    console.log(this.state);

    const { prototype, loading } = this.props;
    const { canEdit } = this.state;
    const code = prototype ? prototype.code : "";

    if (_.isEmpty(prototype)) {
      return <NotFoundPage />;
    } else {
      return (
        <div>
          <PageComponents pageName={prototype.name || "New prototype"} />
          <Modal
            show={this.state.modal ? true : false}
            close={() => this.setState({ modal: false })}
            title={this.state.modal ? this.state.modal : null}
            content={this._renderModalContent()}
          >
            <Flex className="App Underlay">
              <Box auto style={{ position: "relative" }}>
                <Preview
                  togglePlaying={() =>
                    this.setState({ playing: !this.state.playing })}
                  {...this.state}
                  {...this.props}
                />
              </Box>
              <Box w={1 / 2} style={{ position: "relative" }}>
                <Editor code={code} prototype={prototype} {...this.state} />
                <EditControls
                  showAll={() => this.setState({ modal: "Prototypes" })}
                  showSettings={() => this.setState({ modal: "Settings" })}
                  showSnippets={() => this.setState({ modal: "Snippets" })}
                  togglePlaying={() =>
                    this.setState({
                      playing: !this.state.playing
                    })}
                  syntax={this.props.prototype.syntax}
                  handleLogIn={this._handleLogIn.bind(this)}
                  handleLogOut={this._handleLogOut.bind(this)}
                  {...this.state}
                />
              </Box>
            </Flex>
          </Modal>
        </div>
      );
    }
  }
}

Prototype.propTypes = {
  prototype: PropTypes.object,
  loading: PropTypes.bool
};

export default Prototype;
