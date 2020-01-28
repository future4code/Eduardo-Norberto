import React from "react"
import renderer from "react-test-renderer"
import { Create, CreatePostContainer } from "./index"
import { shallow } from "enzyme"


describe("Testa o componente PostCreate", ()=> {
    test('Snapshot', ()=>{
        
        const createPost = renderer.create(<Create />).toJSON();
        expect(createPost).toMatchSnapshot();
    })
    
})