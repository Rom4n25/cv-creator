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
          name: "",
          surname: "",
          address: "",
          phone: "",
          email: "",
        },
      ],
      experience: [],
      education: [],
      photo: "",
    };

    this.setState = this.setState.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.generatePdf = this.generatePdf.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.changeEffect = this.changeEffect.bind(this);
  }

  addExperience() {
    const experience = {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    };

    this.setState({
      experience: this.state.experience.concat(experience),
    });
  }

  deleteExperience() {
    this.setState({
      experience: this.state.experience.slice(0, -1),
    });
  }

  addEducation() {
    const education = {
      university: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    };

    this.setState({
      education: this.state.education.concat(education),
    });
  }

  deleteEducation() {
    this.setState({
      education: this.state.education.slice(0, -1),
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

  changeEffect(e, storageName, id) {
    this.setState((prevState) => ({
      [storageName]: prevState[storageName].map((item, index) =>
        id === index
          ? Object.assign(item, { [e.target.name]: e.target.value })
          : item
      ),
    }));
  }

  render() {
    return (
      <div className="container-fluid">
        <header className="row bg-info p-3">CV GENERATOR</header>
        <div className="row">
          <div className="col-sm p-0 mb-5">
            <InputContainer
              name="Personal Details"
              data={this.state.personalDetails[0]}
              onChange={(e) => this.changeEffect(e, "personalDetails", 0)}
            />
            {this.state.experience.map((item, index) => (
              <InputContainer
                name="Experience"
                data={item}
                key={index}
                onChange={(e) => this.changeEffect(e, "experience", index)}
              />
            ))}
            <Button
              name="Add Experience"
              onClick={this.addExperience}
              color="dark"
            />
            <Button
              name="Delete Experience"
              onClick={this.deleteExperience}
              color="danger"
            />
            {this.state.education.map((item, index) => (
              <InputContainer
                name="Education"
                data={item}
                key={index}
                onChange={(e) => this.changeEffect(e, "education", index)}
              />
            ))}
            <Button
              name="Add Education"
              onClick={this.addEducation}
              color="dark"
            />
            <Button
              name="Delete Education"
              onClick={this.deleteEducation}
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
              name="Upload Photo"
              onClick={this.uploadFile}
              color="info"
            />

            <Button
              name="Generate PDF"
              onClick={this.generatePdf}
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
