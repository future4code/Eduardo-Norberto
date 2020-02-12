import axios from "axios";

export const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-edu'

export const getTasks = (tasks) =>({
    type: "GET_ALL_TASKS",
    payload: {
        tasks,
    }
})

export const getAllTasks = () => async (dispatch) =>{

    const response = await axios.get(baseUrl)

    dispatch(getTasks(response.data))
}

export const createTask = (text, day) => async (dispatch) => {

    const newTask = {
        text,
        day,
    }

    try{
        await axios.post(baseUrl, newTask);
        window.alert("Tarefa criada com sucesso!!!")
        dispatch(getAllTasks())
    }catch(error) { 
        console.log(error)
        window.alert("Não foi possivel cria a tarefa!!!")
    }
}