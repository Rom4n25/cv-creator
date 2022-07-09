import React, { Component } from "react";

class ExperienceDisplay extends Component {
  render() {
    return (
      <div>
        {this.props.state.length > 0 ? (
          <div className="h5 pb-1 fw-bold mt-4 mb-3 border-bottom border-dark">
            Experience
          </div>
        ) : null}

        {this.props.state.map((experience, index) => (
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
      </div>
    );
  }
}
export default ExperienceDisplay;
