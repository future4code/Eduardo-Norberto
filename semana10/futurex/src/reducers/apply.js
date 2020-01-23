const initialState = {
    allApply: []
}

const apply = (state = initialState, action) => {
    switch(action.type){
        case "SET_APPLICATION":
            return {...state, allApply: action.payload.apply}
        default:
            return state
    }
}

export default apply;