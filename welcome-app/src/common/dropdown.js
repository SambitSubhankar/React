import React, { Component } from 'react';

class CDropdown extends Component {
    constructor(props) { super(props) }

    render() {
        return (
            <select name={this.props.name} className="form-control">
                {this.props.dataSource && this.props.dataSource.length > 0 && this.props.dataSource.map( (type, index) => {
                    return <option key={index} value={type.value}>{type.displayName}</option>}
                )
            }
            </select>
        )
    }
}

export default CDropdown;