import React, { Component } from "react";
import PropTypes from "prop-types";
import { Flex } from "reflexbox";
import { Link } from "react-router-dom";
import { Maximize, Minimize } from "react-feather";

import "../styles/Controls.css";

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
      <Flex className="Controls" column>
        <div onMouseEnter={event => event.stopPropagation()}>
          <Link
            className="Control PreviewControl"
            to={full ? `/${prototype._id}` : `/${prototype._id}/preview`}
            data-tip={full ? "Minimize" : "Maximize"}
            style={{
              transform: `translateX(${show ? 0 : "6em"})`
            }}
          >
            {full ? <Minimize /> : <Maximize />}
          </Link>
        </div>
        {full && (
          <div
            className="ControlsTrigger"
            onMouseEnter={this._controlToggle}
            onMouseLeave={this._controlToggle}
          />
        )}
      </Flex>
    );
  }
}

PreviewControls.propType = {
  full: PropTypes.bool,
  prototype: PropTypes.object
};

export default PreviewControls;
