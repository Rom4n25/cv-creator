import React, { Component } from "react";

class NameAndSurnameDisplay extends Component {
  render() {
    return (
      <p className="fs-1 fw-bold m-0 text-white">
        {this.props.state[0].name} {this.props.state[0].surname}
      </p>
    );
  }
}

export default NameAndSurnameDisplay;
