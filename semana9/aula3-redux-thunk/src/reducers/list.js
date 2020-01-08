const initialState = {
	allTasks: []
}


export const listReducer = (state = initialState, action) => {
	switch(action.type){
		case 'ADD_TASK':
			const newTaskList = [...state.allTasks, action.payload.list]
				return{...state, allTasks:newTaskList}
			default:
				return state;
	}
}

