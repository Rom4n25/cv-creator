import React, { Component } from "react";
import NameAndSurnameDisplay from "./NameAndSurnameDisplay";
import PersonalDetailsDisplay from "./PersonaDetailsDisplay";
import ExperienceDisplay from "./ExperienceDisplay";
import EducationDisplay from "./EducationDisplay";

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
            <NameAndSurnameDisplay state={this.props.state.personalDetails} />
          </div>

          <div className="row p-0 m-0 bg-white" style={{ height: "85%" }}>
            <div className="col-sm-8 p-3 ">
              <ExperienceDisplay state={this.props.state.experience} />
              <EducationDisplay state={this.props.state.education} />
            </div>

            <div className="d-flex flex-column align-items-center col-sm-4 bg-light p-3">
              <PersonalDetailsDisplay state={this.props.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeDisplay;
