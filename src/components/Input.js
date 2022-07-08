import React, { Component } from "react";

class Input extends Component {
  changeEffect = (e) => {
    this.props.setState((prevState) => ({
      [this.props.storage]: prevState[this.props.storage].map((item) =>
        this.props.id === item.id
          ? Object.assign(item, { [this.props.name]: e.target.value })
          : item
      ),
    }));
  };

  render() {
    return (
      <div className="input-group">
        <input
          name={this.props.name}
          className="form-control mt-3"
          onChange={this.changeEffect}
          placeholder={this.props.name}
        ></input>
      </div>
    );
  }
}

export default Input;
