export const createListAction = (list) => {
	return {
		type: 'ADD_TASK',
		payload:{
			list,
		}
	}
}