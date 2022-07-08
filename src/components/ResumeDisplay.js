import React, { Component } from "react";
import image from "../img/person.jpg";

class ResumeDisplay extends Component {
  render() {
    return (
      <div className="container p-5 m-0 position-sticky sticky-top">
        <div
          id="cv"
          className="shadow p-0 mb-5 bg-body rounded"
          style={{ width: "21cm", height: "29.7cm" }}
        >
          <div
            className="row bg-primary m-0 p-0 align-items-end"
            style={{ height: "15%" }}
          >
            <p className="fs-1 fw-bold m-0 text-white">
              {this.props.state.personalDetails[0].name}{" "}
              {this.props.state.personalDetails[0].surname}
            </p>
          </div>

          <div className="row p-0 m-0 bg-white" style={{ height: "85%" }}>
            <div className="col-sm-8 p-3 ">
              {this.props.state.experience.length > 0 ? (
                <div className="h5 pb-1 fw-bold mt-4 mb-3 border-bottom border-dark">
                  Experience
                </div>
              ) : null}

              {this.props.state.experience.map((experience, index) => (
                <div key={index} className="mb-3">
                  {experience.position}
                  <span>, </span>
                  {experience.company}
                  <span>, </span>
                  {experience.city}
                  <div>
                    {experience.from}
                    <span> - </span>
                    {experience.to}
                  </div>
                </div>
              ))}
              {this.props.state.education.length > 0 ? (
                <div className="h5 pb-1 fw-bold mt-4 mb-3 border-bottom border-dark">
                  Education
                </div>
              ) : null}

              {this.props.state.education.map((education, index) => (
                <div key={index} className="mb-3">
                  {education.university}
                  <span>, </span>
                  {education.city}
                  <div>
                    {education.degree}
                    <span>, </span>
                    {education.subject}
                  </div>
                  <div>
                    {education.from}
                    <span> - </span>
                    {education.to}
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex flex-column align-items-center col-sm-4 bg-light p-3">
              <div>
                <img
                  alt="person_image"
                  className="img-thumbnail"
                  src={
                    this.props.state.photo.length === 0
                      ? image
                      : this.props.state.photo
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeDisplay;
