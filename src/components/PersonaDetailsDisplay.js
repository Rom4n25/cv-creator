import React, { Component } from "react";
import image from "../img/person.jpg";
class PersonalDetailsDisplay extends Component {
  render() {
    return (
      <div>
        <img
          alt="person_image"
          className="img-thumbnail"
          src={
            this.props.state.photo.length === 0 ? image : this.props.state.photo
          }
          width={200}
          height={200}
        ></img>
        <p className="h5 fw-bold mt-4 mb-3">Personal details</p>
        <p className="m-0 fw-bold">Address</p>
        <p>{this.props.state.personalDetails[0].address}</p>
        <p className="m-0 fw-bold">Phone number</p>
        <p>{this.props.state.personalDetails[0].phone}</p>
        <p className="m-0 fw-bold">E-mail</p>
        <p>{this.props.state.personalDetails[0].email}</p>
      </div>
    );
  }
}
export default PersonalDetailsDisplay;
