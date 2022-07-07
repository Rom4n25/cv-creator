import React, { Component } from "react";
import Input from "./Input";

class InputContainer extends Component {
  render() {
    return (
      <div className="container bg-light p-4 w-100 border-bottom border-dark">
        <div>{this.props.name}:</div>
        {this.props.data.map((item) => (
          <Input
            key={item}
            dataName={item}
            statePropertyName={item + this.props.number}
            setState={this.props.setState}
          />
        ))}
      </div>
    );
  }
}

export default InputContainer;
