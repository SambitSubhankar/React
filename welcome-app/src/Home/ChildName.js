import React, { Component } from 'react';


class ChildName extends Component {
    componentDidUpdate(){
        console.log("5. Child2 componentDidUpdate  Called");
    }
    constructor(props) {
        super(props)
        console.log("1. Child2 constructor Called", props.childText);
    }

    render() {
        console.log("2. Child2 render called");
        return <div>welcome to Child 2
            <div>My Name is {this.props.childText}</div>
        </div>
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("4. Child2 shouldComponentUpdate nextProps, nextState", nextProps, nextState);
        return true;
    }

    componentDidMount(){
        console.log("3. Child2 componentDidMount Called", this.props.childText);
    }

  
componentWillUnmount(){
    console.log("6. Child2 componentWillUnmount")
}
    


}


export default ChildName;