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
      experienceComponents: [],
      educationComponents: [],
    };

    this.setState = this.setState.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.generatePdf = this.generatePdf.bind(this);
  }

  addExperience() {
    const componentNumber = this.state.experienceComponents.length + 1;
    this.setState({
      experienceComponents: this.state.experienceComponents.concat(
        <InputContainer
          key={componentNumber}
          name="Experience"
          number={componentNumber}
          data={["Position", "Company", "Work city", "Work start", "Work end"]}
          setState={this.setState}
        />
      ),
    });
  }

  deleteExperience() {
    const componentNumber = this.state.experienceComponents.length;

    this.setState({
      ["position" + componentNumber]: undefined,
      ["company" + componentNumber]: undefined,
      ["work_city" + componentNumber]: undefined,
      ["work_start" + componentNumber]: undefined,
      ["work_end" + componentNumber]: undefined,
      experienceComponents: this.state.experienceComponents.slice(0, -1),
    });
  }

  addEducation() {
    const componentNumber = this.state.educationComponents.length + 1;
    this.setState({
      educationComponents: this.state.educationComponents.concat(
        <InputContainer
          key={componentNumber}
          name="Education"
          number={componentNumber}
          data={[
            "University name",
            "Education City",
            "Degree",
            "Subject",
            "Education start",
            "Education end",
          ]}
          setState={this.setState}
        />
      ),
    });
  }

  deleteEducation() {
    const componentNumber = this.state.educationComponents.length;

    this.setState({
      ["university_name" + componentNumber]: undefined,
      ["education_city" + componentNumber]: undefined,
      ["degree" + componentNumber]: undefined,
      ["subject" + componentNumber]: undefined,
      ["education_start" + componentNumber]: undefined,
      ["education_end" + componentNumber]: undefined,
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
              data={[
                "First name",
                "Last name",
                "Address",
                "Phone number",
                "Email",
              ]}
              number=""
              key="details"
              setState={this.setState}
            />
            {experienceComponents.map((component) => component)}
            <Button
              onClick={this.addExperience}
              name="Add Experience"
              color="dark"
            />
            {console.log(this.state)}
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
