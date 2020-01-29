import React from "react"
import renderer from "react-test-renderer"
import { DivContet } from "./index"


describe("Testa o componente PostCreate", ()=> {
    test('Snapshot', ()=>{
        
        const signIn = renderer.create(<DivContet />).toJSON();
        expect(signIn).toMatchSnapshot();
    })
})