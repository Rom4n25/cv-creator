import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={
          "btn btn-sm btn-block w-100 rounded-0 btn-" + this.props.color
        }
        onClick={this.props.onClick}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Button;
