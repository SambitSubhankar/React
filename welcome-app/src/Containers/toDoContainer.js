import  {connect} from 'react-redux';

import { addToDo,removeToDo } from './../Action/toDoActions';

import Todo from '../Todo/todo';

const mapStateToProps = state => {
    return {
        toDoList : state.ToDoReducer.toDoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toDoAddAction : (name) => dispatch(addToDo(name)),
        toDoRemoveAction : (name) => dispatch(removeToDo(name)),
    }
}

const ToDoConatiner = connect(mapStateToProps,mapDispatchToProps)(Todo);
export default ToDoConatiner;
