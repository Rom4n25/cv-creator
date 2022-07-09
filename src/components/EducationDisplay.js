import React, { Component } from "react";

class EducationDisplay extends Component {
  render() {
    return (
      <div>
        {this.props.state.length > 0 ? (
          <div className="h5 pb-1 fw-bold mt-4 mb-3 border-bottom border-dark">
            Education
          </div>
        ) : null}

        {this.props.state.map((education, index) => (
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
    );
  }
}
export default EducationDisplay;
