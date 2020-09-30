import { combineReducers } from 'redux';
import HomeReducer from './homeReducer';
import ToDoReducer from './toDoReducer';

const rootReducers =  combineReducers({ HomeReducer, ToDoReducer });

export default  rootReducers;