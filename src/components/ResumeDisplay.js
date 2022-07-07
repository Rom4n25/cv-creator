import React, {Component} from "react";

class ResumeDisplay extends Component {

    render(){
        return (
            <div className="container p-5 m-0 position-sticky sticky-top">
                <div className="shadow p-0 mb-5 bg-body rounded">
                    <div className="row bg-primary m-0 p-0 align-items-end" style={{height:"120px"}}>
                        <p className="fs-1 fw-bold m-0 text-white">{this.props.state.first_name} {this.props.state.last_name}</p>
                    </div>
                    <div className="row p-0 m-0" style={{minHeight:"800px"}}>
                        <div className="col-sm-8">
                            <p className="h5">Experience</p>
                        </div>
                        <div className="col-sm-4 bg-light">
                            <p>Personal details</p>
                            <p>Address {this.props.state.address}</p>
                            <p>Phone number {this.props.state.phone_number}</p>   
                            <p>E-mail {this.props.state.email}</p>
                        </div>
                    </div>
                </div>
                {console.log(this.props.state.experience)}
            </div>
        )
    }
}

export default ResumeDisplay