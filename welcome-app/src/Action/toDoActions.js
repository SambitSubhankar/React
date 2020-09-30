const addToDo = (todoName) => {
    return (dispatch, getState) => {
        dispatch({ type: "ADD-TODO", payload: { name: todoName } })
    }
}

function removeToDo(todoName) {
    return (dispatch, getState) => {
        dispatch({ type: "REMOVE-TODO", payload: { name: todoName } })
    }
}

export { addToDo, removeToDo }