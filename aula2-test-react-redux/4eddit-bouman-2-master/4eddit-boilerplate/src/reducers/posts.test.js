import posts from "./posts"
import { setPosts } from "../actions"


describe("Testa o reducer posts", ()=>{
    test('Testa se create cria um post', ()=>{
        const currentState = {
            allPosts: []
        }
        
        const action = setPosts("Teste post")

        const newState = posts(currentState, action)

        expect(newState.allPosts).toHaveLength(10)
    })
})