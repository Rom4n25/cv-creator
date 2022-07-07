import React, {Component} from "react";
import image from "../img/person.jpg";


class ResumeDisplay extends Component {

    render(){
        return (
            <div  className="container p-5 m-0 position-sticky sticky-top">
                <div id="cv" className="shadow p-0 mb-5 bg-body rounded" style={{width:"21cm",minHeight:"29.7cm"}}>
                    
                    <div className="row bg-primary m-0 p-0 align-items-end" style={{height:"120px"}}>
                        <p className="fs-1 fw-bold m-0 text-white">{this.props.state.first_name} {this.props.state.last_name}</p>
                    </div>
                    <div className="row p-0 m-0" >
                        <div className="col-sm-8 p-3"style={{minHeight:"900px"}}>

                            {this.props.state.exp_display.map((item,index)=>
                                <div>
                                    <div className="h5 pb-1 fw-bold mt-4 mb-3 border-bottom border-dark">Experience</div>
                                    <p className="m-0 fw-bold">Position</p>
                                    <p className="mb-1">{this.props.state["position"+(index+1)]}</p>
                                    <p className="m-0 fw-bold">Company</p>
                                    <p className="mb-1">{this.props.state["company"+(index+1)]}</p>
                                    <p className="m-0 fw-bold">City</p>
                                    <p className="mb-1">{this.props.state["work_city"+(index+1)]}</p>
                                    <span className="m-0 fw-bold">Period of work </span>
                                    <span className="mb-1">{this.props.state["work_start"+(index+1)]}</span>
                                    <span className="m-0 fw-bold"> - </span>
                                    <span className="mb-1">{this.props.state["work_end"+(index+1)]}</span>
                                </div>
                            )}
                            
                            {this.props.state.edu_display.map((item,index)=>
                                <div>
                                    <div className="h5 pb-1 fw-bold mt-4 mb-3 border-bottom border-dark">Education</div>
                                    <p className="m-0 fw-bold">University name</p>
                                    <p className="mb-1">{this.props.state["university_name"+(index+1)]}</p>
                                    <p className="m-0 fw-bold">City</p>
                                    <p className="mb-1">{this.props.state["education_city"+(index+1)]}</p>
                                    <p className="m-0 fw-bold">Degree</p>
                                    <p className="mb-1">{this.props.state["degree"+(index+1)]}</p>
                                    <p className="m-0 fw-bold">Subject</p>
                                    <p className="mb-1">{this.props.state["subject"+(index+1)]}</p>
                                    <span className="m-0 fw-bold">Period of education </span>
                                    <span className="mb-1">{this.props.state["education_start"+(index+1)]}</span>
                                    <span className="m-0 fw-bold"> - </span>
                                    <span className="mb-1">{this.props.state["education_end"+(index+1)]}</span>
                                </div>
                            )}

                        </div>
                        <div className="d-flex flex-column align-items-center col-sm-4 bg-light p-3">
                            <div>
                                <img alt="person_image" className="img-thumbnail" src={image} width={200} height={200}></img>
                                <p className="h5 fw-bold mt-4 mb-3">Personal details</p>
                                <p className="m-0 fw-bold">Address</p>
                                <p>{this.props.state.address}</p>
                                <p className="m-0 fw-bold">Phone number</p> 
                                <p>{this.props.state.phone_number}</p>   
                                <p className="m-0 fw-bold">E-mail</p>
                                <p>{this.props.state.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResumeDisplay