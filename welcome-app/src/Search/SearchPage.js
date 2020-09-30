import React, { Component } from 'react';

class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.initialvalue
        }

    }
    addFunction() {
        return this.setState({ count: this.state.count + 2 });
    }

    subFunction() {
        return this.setState({ count: this.state.count - 2 });
    }

    render() {
        const style = { padding: "5px 5px 5px 5px", marginRight: "15px", color:'red'}
        return <div className="container">
            <h1>Welcome to call component- {this.state.count}</h1>
           <div><button style={style} className="btn btn-outline-primary" onClick={() => this.addFunction()}> Add</button>
            <button style={style} className="btn btn-outline-primary" onClick={() => this.subFunction()} > Substract</button>
            <button style={style} className="btn btn-outline-primary" onClick={() => this.setState({ count: this.props.initialvalue })} > Reset</button></div> 
        </div>
    }

}

export default SearchPage;