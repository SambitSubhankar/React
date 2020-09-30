import React, { Component } from 'react';
import ChildName from './ChildName';

class Child1 extends Component {
    componentDidUpdate() {
        console.log("5. componentDidUpdate  Called");
    }
    constructor(props) {
        super(props)
        console.log("1.constructor Called", props.name);
        this.state = {
            name: ""
        }
    }

    render() {
        console.log("2. render called");
        return <div>welcome to Child 1 {this.state.name}
            <div><input type="text" onChange={(e) => this.onHandleChange(e)} /></div>
            
            {this.state.name && <ChildName childText={this.state.name} />}
        </div>
    }

    onHandleChange(e) {
        this.setState({ name: e.target.value });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("4. shouldComponentUpdate nextProps, nextState", nextProps, nextState);
        if (nextState.name == "thani")
            return true;
        else
            return false;
    }

    componentDidMount() {
        console.log("3. componentDidMount Called", this.props.name);
    }






}

class child2 {
    dispalyText() {
        console.log("CHild2-> displayText-> Text");
    }
}

export default Child1;