import React, {Component} from 'react';

class Input extends Component{

   changeEffect = (e) =>{
    const stateName = this.props.name.toLowerCase().replace(/\s/g, '_');
    console.log(stateName)
    this.props.setState({[stateName]:e.target.value});
   }

    render(){
        return(
            <div className="input-group">
                <input type="text" className="form-control mt-3"  name={this.props.name} onChange={this.changeEffect} placeholder={this.props.name}></input>
            </div>
        )
    }
}

export default Input