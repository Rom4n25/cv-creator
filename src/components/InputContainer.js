import React, { Component } from "react";
import Input from "./Input";

class InputContainer extends Component {
  render() {
    return (
      <div className="container bg-light p-4 w-100 border-bottom border-dark">
        <div>{this.props.name}</div>
        {Object.keys(this.props.data).map((item) =>
          item !== "id" ? (
            <Input
              key={item}
              name={item}
              storage={this.props.storage}
              id={this.props.data.id}
              setState={this.props.setState}
            />
          ) : null
        )}
      </div>
    );
  }
}

export default InputContainer;
