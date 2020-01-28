import React from "react"
import renderer from "react-test-renderer"
import { MainDiv } from "./index"


describe("Testa o componente PostCreate", ()=> {
    test('Snapshot', ()=>{
        
        const homePage = renderer.create(<MainDiv />).toJSON();
        expect(homePage).toMatchSnapshot();
    })
})