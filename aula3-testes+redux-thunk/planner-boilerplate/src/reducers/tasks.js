const initialState = {
    allTasks: []
}

const tasks = (state = initialState, action) =>{
    switch(action.type){
        case "GET_ALL_TASKS":
            return {...state, allTasks: action.payload.tasks}
        default:
            return state
    }
}
export default tasks;