import React from 'react'
import { shallow } from 'enzyme'
import renderer from "react-test-renderer"
import {LoginPage, LoginWrapper} from "./index"


describe('Testa componente de LoginPage', ()=>{
    // test('Verifica a chamada da função de login de usuário', ()=>{
    //     //preparação
    //     const mockLogin = {
    //         email:"man@lo.com",
    //         name: "Manolo",
    //         user: "manolo35"
    //     }
    //     //execucao
    //     const componet = shallow(<LoginWrapper />)

    // })
    test('Snapshot', ()=> {
        const loginPage = renderer.create(<LoginPage/>).toJSON();
        expect(loginPage).toMatchSnapshot();
    })
})