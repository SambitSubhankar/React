import React, { Component } from 'react';

class CNationality extends Component {

    constructor(props) { 
        super(props);
       // console.log(this.props);
       let test = 5;
       let test1 =" 5";
       console.log(test);
       console.log(test1);
    }

    render() {
        var outsideVar=this.props;

        return (
            <select name={this.props.name} className="form-control">
                {this.props.dataSource && this.props.dataSource.length > 0 &&
                        this.props.dataSource.map((type, index) => 
                        { 
                            console.log(outsideVar);
                            return <option key={index} value={type.value}>{type.displayName}</option> 
                        })
                }
            </select>
        )
    }
}

export default CNationality;