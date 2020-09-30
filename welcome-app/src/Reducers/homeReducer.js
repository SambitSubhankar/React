
const initialState = {
    childs: [{ name: "child1" }, { name: "child2" }, { name: "child3" }]
}

function HomeReducer(state = initialState, action) {
    switch (action.type) {       
        default: {
            return state;
        }

    }

}

export default HomeReducer;