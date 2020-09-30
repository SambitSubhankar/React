import { render } from '@testing-library/react';
import React, { Component } from 'react';



class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toDo: "",
            toDoList: this.props.toDoList
        }
    }

    // shouldComponentUpdate(){
    //     return true;
    // }

    // static getDerivedStateFromError(error) {
    //     console.log("error:-", error);
    // }
    componentDidCatch(error){
        console.log(error);
    }

    onSubmitHandel(e) {
        e.preventDefault();
        console.log(this.state.toDo);
        // let _toDo = this.state.toDOList;
        // _toDo.push({name:this.state.toDo})
        // this.setState({toDOList:_toDo});
        this.props.toDoAddAction(this.state.toDo);
    }

    oChangeHandel(e) {

        this.setState({ toDo: e.target.value });
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.toDoList != prevState.toDOList) {

    //         return {
    //             toDOList: nextProps.toDoList
    //         }
    //     }

    //     return null;
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.toDOList != prevState.toDOList) {
    //         console.log(this.props, this.state);
    //         this.setState({ toDOList: this.state.toDOList });
    //     }
    // }

    componentWillReceiveProps(nextProps){
        this.setState({toDoList: nextProps.toDoList})
    }

    render() {
        return <div>
            <h1>ToDo Task</h1>
            <form onSubmit={e => this.onSubmitHandel(e)} onChange={e => this.oChangeHandel(e)}>
                <label>ToDo</label>
                <input type="text" name="doName" />
                <button type="submit" name="add">Add</button>
            </form>
            <div>
                {this.state.toDoList && this.state.toDoList.map((item, index) => {
                    return <div  key={index}>
                        <div>{item.name}</div> <div><button>remove</button></div>
                    </div>
                })}
            </div>

        </div>
    }
}

export default Todo;
