import React, {Component} from "react";
import ResumeDisplay from "./components/ResumeDisplay";
import InputContainer from "./components/InputContainer";
import { jsPDF } from "jspdf";

class App extends Component {

  constructor(){
    super();
    this.state = {
      exp_display:[],
      edu_display:[],
    };
    
    this.setState = this.setState.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.generatePdf = this.generatePdf.bind(this);

  }

  addExperience(){
    this.setState({exp_display:this.state.exp_display.concat(
      <InputContainer key={this.state.exp_display.length+1} name="Experience" number={(this.state.exp_display.length+1)} data={["Position", "Company", "Work city", "Work start", "Work end"]} state={this.state} setState={this.setState}/>
    )});
 
  }

  deleteExperience(){
    this.setState({exp_display:this.state.exp_display.slice(0,-1)})
  }

  addEducation(){
    this.setState({edu_display:this.state.edu_display.concat(
      <InputContainer key={this.state.edu_display.length+1} name="Education" number={(this.state.edu_display.length+1)} data={["University name", "Education City", "Degree", "Subject", "Education start", "Education end"]} state={this.state} setState={this.setState}/>
      )});
  }

  deleteEducation(){
    this.setState({edu_display:this.state.edu_display.slice(0,-1)})
  }

  componentDidMount(){
    this.addExperience();
    this.addEducation();
  }

  generatePdf(){
    const cv = new jsPDF('p','cm',[29.7, 21]);
    cv.html(document.querySelector("#cv")).then(()=>{cv.save("cv.pdf")});
  }
  
  render(){
    return (
      <div className="container-fluid">
        <div className="row bg-info" style={{height:"120px"}}>
        </div>
        <div className="row">
          <div className="col-sm p-0 mb-5">
            <InputContainer key="details" name="Personal Details" number="" data={["First name", "Last name", "Address", "Phone number", "Email"]} state={this.state} setState={this.setState}/>
            {this.state.exp_display.map(item=>item)}
            <button type="button" className="btn btn-dark btn-sm btn-block w-100 rounded-0" onClick={this.addExperience}>Add Experience</button>
            <button type="button" className="btn btn-danger btn-sm btn-block w-100 rounded-0" onClick={this.deleteExperience}>Delete Experience</button>
       
            {console.log(this.state)}
            {this.state.edu_display.map(item=>item)}
            <button type="button" className="btn btn-dark btn-sm btn-block w-100 rounded-0" onClick={this.addEducation}>Add Education</button>
            <button type="button" className="btn btn-danger btn-sm btn-block w-100 rounded-0" onClick={this.deleteEducation}>Delete Education</button>
            <button type="button" className="btn btn-success btn-sm btn-block w-100 rounded-0" onClick={this.generatePdf}>Generate PDF</button>

          </div>
          <div className="col-sm p-0">

            <ResumeDisplay state={this.state}/>
          </div>
        </div>
      </div>
    )
  };
}
  
 


export default App;
