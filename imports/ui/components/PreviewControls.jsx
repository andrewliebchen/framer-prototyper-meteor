import React, { Component } from "react";
import PropTypes from "prop-types";
import { Maximize, Minimize } from "react-feather";
import classnames from "classnames";
import styled from "styled-components";

import Controls from "./Controls.jsx";
import Control from "./Control.jsx";

const ControlsTrigger = styled.div`
  cursor: pointer;
  position: absolute;
  right: -1em;
  top: -1em;
  bottom: -1em;
  width: 5em;
`;

class PreviewControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.full ? false : true
    };

    this._controlToggle = this._controlToggle.bind(this);
  }

  _controlToggle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { prototype, full } = this.props;
    const { show } = this.state;

    return (
      <Controls>
        <div onMouseEnter={event => event.stopPropagation()}>
          <Control
            dark={prototype.background === "dark"}
            data-tip={full ? "Minimize" : "Maximize"}
            onClick={() =>
              this.props.history.push(
                full ? `/${prototype._id}` : `/${prototype._id}/preview`
              )
            }
            style={{
              transform: `translateX(${show ? 0 : "6em"})`
            }}
          >
            {full ? <Minimize /> : <Maximize />}
          </Control>
        </div>
        {full && (
          <ControlsTrigger
            onMouseEnter={this._controlToggle}
            onMouseLeave={this._controlToggle}
          />
        )}
      </Controls>
    );
  }
}

PreviewControls.propType = {
  full: PropTypes.bool,
  prototype: PropTypes.object
};

export default PreviewControls;
