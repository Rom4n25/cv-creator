import React, {Component} from "react";
import ResumeDisplay from "./components/ResumeDisplay";
import InputContainer from "./components/InputContainer";

class App extends Component {

  constructor(){
    super();
    this.state = {};
    this.setState = this.setState.bind(this);
  }


  render(){
  
    return (
      <div className="container-fluid">
        <div className="row bg-info" style={{height:"120px"}}>
        </div>
        <div className="row">
          <div className="col-sm p-0">

            <InputContainer name="Personal Details" data={["First name", "Last name", "Address", "Phone number", "Email"]} setState={this.setState}></InputContainer>
            <InputContainer name="Experience" data={["Position", "Company", "City", "From", "To"]} setState={this.setState}></InputContainer>
    
          </div>
          <div className="col-sm p-0">
            <ResumeDisplay state={this.state} />
          </div>
        </div>
      </div>
    )
  };
}
  
 


export default App;
