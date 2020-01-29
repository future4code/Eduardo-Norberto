import React from "react"
import renderer from "react-test-renderer"
import { PostDiv, PostTittle } from "./index"
import { shallow } from "enzyme"


describe("Testa o componente PostCreate", ()=> {
    test('Snapshot', ()=>{
        
        const listPost = renderer.create(<PostDiv />).toJSON();
        expect(listPost).toMatchSnapshot();
    })

    // test('Testa se os componentes PostCreate são renderizados', ()=>{
    //     const mockCreatePost =  {title: "Teste1"}
        

    //     const component = shallow(<PostTittle posts={mockCreatePost} />)

    //     const allItems = component.find(PostTittle)

    //     expect(allItems.props().title).toBe( "Teste1")
    // })
})