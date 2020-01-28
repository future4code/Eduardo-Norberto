import React from "react"
import renderer from "react-test-renderer"
import { BackgroundDiv } from "./index"


describe("Testa o componente PostCreate", ()=> {
    test('Snapshot', ()=>{
        
        const postDetails = renderer.create(<BackgroundDiv />).toJSON();
        expect(postDetails).toMatchSnapshot();
    })
})