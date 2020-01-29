import { postLogin, 
        setPosts,
        setPostDetail,  
        setCreateUser, 
        setCreatePost, 
        } from "./index"

describe("Testa actions do index.js", ()=> {
    test("Testa o login de usuario", ()=>{
        //prepatação
        const textLogin = "manolo"
        //execução
        const action = postLogin(textLogin)
        //verificação
        expect(action.type).toEqual('POST_LOGIN')
        expect(action.payload).toEqual({login: "manolo"})
    })
    test("Testa se a ação está pegando os post", ()=>{
        //preparação
        const textPost = "Teste de post"
        //execução
        const action = setPosts(textPost)
        //verificação
        expect(action.type).toEqual("SET_POSTS")
        expect(action.payload).toEqual({posts:"Teste de post"})
    })
    test("Testa se a ação está pegando os post com detalhes", ()=>{
        //preparação
        const textPostDetail = "Teste de post com detalhes"
        //execução
        const action = setPostDetail(textPostDetail)
        //verificação
        expect(action.type).toEqual("SET_POST_DETAIL")
        expect(action.payload).toEqual({detail:"Teste de post com detalhes"})
    })  
    test("Testa se a ação de criar usuario", ()=>{
        //preparação
        const createUser = "manolo18"
        //execução
        const action = setCreateUser(createUser)
        //verificação
        expect(action.type).toEqual("CREATE_USER")
        expect(action.payload).toEqual({user:"manolo18"})
    })
    test("Testa se a ação de criação dos post", ()=>{
        //preparação
        const createPost = "Teste de criação de post"
        //execução
        const action = setCreatePost(createPost)
        //verificação
        expect(action.type).toEqual("CREATE_POST")
        expect(action.payload).toEqual({createpost:"Teste de criação de post"})
    })
})