import React, {Component} from 'react';

class Input extends Component{
    
   changeEffect = (e) =>{
    const data= this.props.data.toLowerCase().replace(/\s/g, '_')+this.props.number;
    this.props.setState({[data]:e.target.value})
   }

    render(){
        return(
            <div className="input-group">
                <input type="text" className="form-control mt-3" name={this.props.data} onChange={this.changeEffect} placeholder={this.props.data}></input>
            </div>
        )
    }
}

export default Input