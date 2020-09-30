
const initialState = {
    toDoList: [{ name: "Initaial Data from Store" }],

}

function ToDoReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD-TODO": {

            let newState = { ...state };
            newState.toDoList.push(action.payload);
            return newState;
        }
        case "REMOVE-TODO": {
            let newState = { ...state };
            newState.toDoList.pop(action.payload);
            return newState;

        }
        default: {
            return state;
        }

    }

}

export default ToDoReducer;