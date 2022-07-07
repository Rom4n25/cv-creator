import React, { Component } from "react";

class Input extends Component {
  changeEffect = (e) => {
    const propertyName = this.props.statePropertyName
      .toLowerCase()
      .replace(/\s/g, "_");
    this.props.setState({ [propertyName]: e.target.value });
  };

  render() {
    return (
      <div className="input-group">
        <input
          className="form-control mt-3"
          onChange={this.changeEffect}
          placeholder={this.props.dataName}
        ></input>
      </div>
    );
  }
}

export default Input;
