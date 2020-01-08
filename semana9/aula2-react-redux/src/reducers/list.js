const initialState = {
	allTasks: [{
		text: 'test',
		completed: false,
		id: new Date().getTime()
	}]
}


const list = (state = initialState, action) => {
	switch(action.type){
		case 'ADD_TASK':
			const newTask = {
				text: action.payload.text,
				completed: false,
				id: new Date().getTime()
			}
				return{...state, allTasks:[...state.allTasks, newTask]}
			default:
				return state;
	}
}

export default list;