import React, {Component} from "react";

class ResumeDisplay extends Component {

    render(){
        return (
            <div>
                {this.props.state.first_name}
                {this.props.state.last_name}
                {this.props.state.phone_number}
                {console.log(this.props.state.experience)}
            </div>
        )
    }
}

export default ResumeDisplay