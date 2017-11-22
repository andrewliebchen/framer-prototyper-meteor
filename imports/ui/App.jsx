import React, { Component } from "react";
import { Flex, Box } from "reflexbox";
import queryString from "query-string";
import ReactTooltip from "react-tooltip";
import { Helmet } from "react-helmet";
// import { createContainer } from "meteor/react-meteor-data";

import Editor from "./components/Editor.jsx";
import Preview from "./components/Preview.jsx";
import Modal from "./components/Modal.jsx";
import FormInput from "./components/FormInput.jsx";
import FormButton from "./components/FormButton.jsx";

import { Prototypes } from "../api/prototypes";

import "./styles/App.css";

const initialCode = {
  coffeescript: `layerA = new Layer
    x: Align.center
    y: Align.center
    backgroundColor: new Color('blue').alpha(0.5)`,
  javascript: `const layerA = new Layer({
    x: Align.center,
    y: Align.center,
    backgroundColor: new Color('blue').alpha(0.5),
  });`
};

// eslint-disable-next-line
const appTitle = "🖼🎉 Framer is fun";

class App extends Component {
  constructor(props) {
    super(props);

    // const urlParams = queryString.parse(this.props.location.search);

    this.state = {
      code: initialCode.coffeescript,
      javascript: true,
      playing: true,
      modal: false
    };
  }

  handleSyntaxChange() {
    const { javascript } = this.state;
    this.setState({
      javascript: !javascript,
      code: initialCode[javascript ? "coffeescript" : "javascript"]
    });
  }

  toggleSettings() {
    this.setState({ settings: !this.state.settings });
  }

  _renderModalContent() {
    switch (this.state.modal) {
      case "settings":
        return (
          <div>
            <FormButton
              buttonLabel={`Switch to ${this.state.javascript
                ? "Coffeescript"
                : "Javascript"}`}
              onClick={this.handleSyntaxChange.bind(this)}
              label="Syntax"
              hint={
                <p>
                  <b>Warning!</b> Switching syntaxes will reset your current
                  work. This can not be undone!
                </p>
              }
            />
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
            <Editor
              handleChange={newCode => this.setState({ code: newCode })}
              showSettings={() => this.setState({ modal: "settings" })}
              togglePlaying={() =>
                this.setState({ playing: !this.state.playing })}
              {...this.state}
            />
          </Box>
          <Box auto>
            <Preview {...this.state} />
          </Box>
        </Flex>
      </Modal>
    );
  }
}

// export default createContainer(() => {
//   return {
//     prototypes: Prototypes.find({}).fetch()
//   };
// }, App);

export default App;
