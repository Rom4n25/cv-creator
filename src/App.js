import React, {Component} from "react";
import ResumeDisplay from "./components/ResumeDisplay";
import InputContainer from "./components/InputContainer";

class App extends Component {

  constructor(){
    super();
    this.state = {
      experience:[],
      education:[],
    };
    this.setState = this.setState.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);

  }

  addExperience(){
    this.setState({experience:this.state.experience.concat(
      <InputContainer key={"experience"+(this.state.experience.length+1)} name="Experience" data={["Position", "Company", "City", "From", "To"]} setState={this.setState}/>
    )});
  }

  deleteExperience(){
    this.setState({experience:this.state.experience.slice(0,-1)})
  }

  addEducation(){
    this.setState({education:this.state.education.concat(
      <InputContainer key={"education"+(this.state.education.length+1)} name="Education" data={["University name", "City", "Degree", "Subject", "From", "To"]} setState={this.setState}></InputContainer>
      )});
  }

  deleteEducation(){
    this.setState({education:this.state.education.slice(0,-1)})
  }

  componentDidMount(){
    this.addExperience();
    this.addEducation();
  }
  
  render(){
  
    return (
      <div className="container-fluid">
        <div className="row bg-info" style={{height:"120px"}}>
        </div>
        <div className="row">
          <div className="col-sm p-0">
            <InputContainer key="details" name="Personal Details" data={["First name", "Last name", "Address", "Phone number", "Email"]} setState={this.setState}/>

            {this.state.experience.map(item=>item)}
            <button type="button" className="btn btn-dark btn-sm btn-block w-100 rounded-0" onClick={this.addExperience}>Add Experience</button>
            <button type="button" className="btn btn-danger btn-sm btn-block w-100 rounded-0" onClick={this.deleteExperience}>Delete Experience</button>
            
            {this.state.education.map(item=>item)}
            <button type="button" className="btn btn-dark btn-sm btn-block w-100 rounded-0" onClick={this.addEducation}>Add Education</button>
            <button type="button" className="btn btn-danger btn-sm btn-block w-100 rounded-0" onClick={this.deleteEducation}>Delete Education</button>
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
