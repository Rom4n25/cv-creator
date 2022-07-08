import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="input-group">
        <input
          name={this.props.name}
          className="form-control mt-3"
          onChange={this.props.onChange}
          placeholder={this.props.name}
        ></input>
      </div>
    );
  }
}

export default Input;
