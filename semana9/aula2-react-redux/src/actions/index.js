export const addTaskAction = newTask => {
	return {
		type: "ADD_TASK",
		payload:{
			newTask: newTask
		}
	}
}