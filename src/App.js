import React, { Component } from "react";
import ResumeDisplay from "./components/ResumeDisplay";
import InputContainer from "./components/InputContainer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Button from "./components/Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalDetails: [
        {
          id: 0,
          name: "",
          surname: "",
          address: "",
          phone: "",
          email: "",
        },
      ],
      experienceData: [],
      educationData: [],
      experienceComponents: [],
      educationComponents: [],
      photo: "",
    };

    this.setState = this.setState.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.generatePdf = this.generatePdf.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  addExperience() {
    const componentNumber = this.state.experienceComponents.length;

    const experience = {
      id: componentNumber,
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    };

    this.setState(
      {
        experienceData: this.state.experienceData.concat(experience),
      },
      () => {
        this.setState({
          experienceComponents: this.state.experienceComponents.concat(
            <InputContainer
              name="Experience"
              storage="experienceData"
              data={experience}
              key={componentNumber}
              setState={this.setState}
            />
          ),
        });
      }
    );
  }

  deleteExperience() {
    this.setState({
      experienceData: this.state.experienceData.slice(0, -1),
      experienceComponents: this.state.experienceComponents.slice(0, -1),
    });
  }

  addEducation() {
    const componentNumber = this.state.educationComponents.length;

    const education = {
      id: componentNumber,
      university: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    };

    this.setState(
      {
        educationData: this.state.educationData.concat(education),
      },
      () => {
        this.setState({
          educationComponents: this.state.educationComponents.concat(
            <InputContainer
              name="Education"
              storage="educationData"
              data={education}
              key={componentNumber}
              setState={this.setState}
            />
          ),
        });
      }
    );
  }

  deleteEducation() {
    this.setState({
      educationData: this.state.educationData.slice(0, -1),
      educationComponents: this.state.educationComponents.slice(0, -1),
    });
  }

  componentDidMount() {
    this.addExperience();
    this.addEducation();
  }

  generatePdf() {
    const cv = document.querySelector("#cv");
    html2canvas(cv).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("cv.pdf");
    });
  }

  uploadFile() {
    const file = document.getElementById("file").files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.setState({ photo: e.target.result });
    };
    reader.readAsDataURL(file);
  }

  render() {
    const experienceComponents = this.state.experienceComponents;
    const educationComponents = this.state.educationComponents;
    return (
      <div className="container-fluid">
        <header className="row bg-info p-3">CV GENERATOR</header>
        <div className="row">
          <div className="col-sm p-0 mb-5">
            <InputContainer
              name="Personal Details"
              storage="personalDetails"
              data={this.state.personalDetails[0]}
              setState={this.setState}
            />
            {experienceComponents.map((component) => component)}
            <Button
              onClick={this.addExperience}
              name="Add Experience"
              color="dark"
            />
            <Button
              onClick={this.deleteExperience}
              name="Delete Experience"
              color="danger"
            />
            {educationComponents.map((component) => component)}
            <Button
              onClick={this.addEducation}
              name="Add Education"
              color="dark"
            />
            <Button
              onClick={this.deleteEducation}
              name="Delete Education"
              color="danger"
            />

            <div className="m-0 ">
              <input
                className="form-control rounded-0"
                type="file"
                id="file"
              ></input>
            </div>

            <Button
              onClick={this.uploadFile}
              name="Upload Photo"
              color="info"
            />

            <Button
              onClick={this.generatePdf}
              name="Generate PDF"
              color="success"
            />
          </div>
          <div className="col-sm p-0">
            <ResumeDisplay state={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
