import { getTasks } from "../actions"
import tasks from "./tasks"

describe('Testa o task do reducer', ()=>{
    test('Testa se pega as informações de getTask', ()=>{
       const currentState = {
           allTasks: []
       }

       const action = getTasks(["Nova tarefa", "New Task"])

       const newState = tasks(currentState, action)

       expect(newState.allTasks).toHaveLength(2)
    })
})