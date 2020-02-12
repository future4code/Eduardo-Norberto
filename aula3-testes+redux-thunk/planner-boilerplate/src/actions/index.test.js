import axios from "axios";
import { getTasks, getAllTasks, baseUrl, createTask } from "./index";


const mock = [{
    text: "Nova tarefa",
    day: "Quarta"
}]

describe("Testar as actions", ()=>{
    test("Dispatch na action e bate na API", async () =>{
        
        const dispatchMock = jest.fn()

        axios.get = jest.fn(()=>{
            return{
                data: mock
            }
        })

        await getAllTasks()(dispatchMock)

        expect(dispatchMock).toHaveBeenCalledWith(getTasks(mock))
    })
})

describe("Testa a criação da tarefa", ()=>{
    test("Testa se é possível criar tarefa", async () =>{
        const dispatchMock = jest.fn()

        axios.post = jest.fn().mockReturnValue({
            status: 200
        })

        await createTask('Nova tarefa', 'Quarta')(dispatchMock)

        expect(dispatchMock).toHaveBeenCalled()
        expect(axios.post).toHaveBeenCalledWith(baseUrl, {text: 'Nova tarefa', day: 'Quarta'})
    })
})

describe("Testa mostrar as tarefas", ()=>{
    test("Testa o returno de ação da action", ()=>{
        const expectedAction = {
            type: "GET_ALL_TASKS",
            payload: {
                tasks: mock,
            }
        }

        const action = getTasks(mock)

        expect(action).toEqual(expectedAction)
    })
})