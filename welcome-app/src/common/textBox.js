import React, { Component } from 'react';


class CTextBox extends Component {
    constructor(props) { 
        super(props);

       
     }

    render() {
        return (
            <input type={this.props.isPssword? "password":"text"}
                className="form-control"
                name={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value?this.props.value:""}
            ></input>
        )
    }

}

export default CTextBox;